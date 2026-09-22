// backend/tests/spamProtection.test.js
const {
  validateHoneypot,
  validateSubmissionTiming
} = require('../middleware/spamProtection');
const { validateContactInput } = require('../middleware/validateContact');
const escapeHtml = require('../utils/escapeHtml');

const mockRes = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn()
});

describe('Spam Protection Middleware', () => {
  describe('validateHoneypot', () => {
    test('validates honeypot field is empty', () => {
      const req = { body: { name: 'John', website: '' } }; // Empty honeypot - legitimate user
      const next = jest.fn();

      validateHoneypot(req, mockRes(), next);

      expect(next).toHaveBeenCalled();
    });

    test('rejects submission with filled honeypot', () => {
      const req = { body: { name: 'Bot', website: 'http://spam.com' } }; // Filled honeypot - bot
      const res = mockRes();
      const next = jest.fn();

      validateHoneypot(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Spam detected' });
      expect(next).not.toHaveBeenCalled();
    });

    test('handles a missing body', () => {
      const next = jest.fn();

      validateHoneypot({}, mockRes(), next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe('validateSubmissionTiming', () => {
    test('validates timing for legitimate submission', () => {
      const req = { body: { formLoadTime: Date.now() - 5000 } }; // 5 seconds ago
      const next = jest.fn();

      validateSubmissionTiming(req, mockRes(), next);

      expect(next).toHaveBeenCalled();
    });

    test('accepts a numeric string timestamp', () => {
      const req = { body: { formLoadTime: String(Date.now() - 5000) } };
      const next = jest.fn();

      validateSubmissionTiming(req, mockRes(), next);

      expect(next).toHaveBeenCalled();
    });

    test('rejects submission that is too fast', () => {
      const req = { body: { formLoadTime: Date.now() - 500 } }; // 0.5 seconds ago
      const res = mockRes();
      const next = jest.fn();

      validateSubmissionTiming(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Submission too fast' });
      expect(next).not.toHaveBeenCalled();
    });

    test.each([
      ['missing', undefined],
      ['non-numeric (previously bypassed the check)', 'abc'],
      ['in the future', Date.now() + 60_000],
      ['a partly numeric string', '123abc'],
      ['an empty string', '']
    ])('rejects formLoadTime that is %s', (_label, formLoadTime) => {
      const req = { body: { formLoadTime } };
      const res = mockRes();
      const next = jest.fn();

      validateSubmissionTiming(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ msg: 'Invalid submission' });
      expect(next).not.toHaveBeenCalled();
    });
  });
});

describe('validateContactInput', () => {
  test('trims fields, defaults the source, and attaches them to req.contact', () => {
    const req = { body: { name: '  Jane ', email: ' jane@example.com ', message: ' Hi there ' } };
    const next = jest.fn();

    validateContactInput(req, mockRes(), next);

    expect(next).toHaveBeenCalled();
    expect(req.contact).toEqual({
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Hi there',
      source: 'contact_page'
    });
  });

  test('keeps text exactly as typed (no stripping)', () => {
    const message = '<script>alert(1)</script> session_id=5 onclick= javascript:';
    const req = { body: { name: 'Jane', email: 'jane@example.com', message } };

    validateContactInput(req, mockRes(), jest.fn());

    expect(req.contact.message).toBe(message);
  });

  test('rejects an email containing whitespace', () => {
    const req = { body: { name: 'Jane', email: 'jane@example.com\r\nBcc: x@y.com', message: 'Hi' } };
    const res = mockRes();

    validateContactInput(req, res, jest.fn());

    expect(res.status).toHaveBeenCalledWith(400);
  });
});

describe('escapeHtml', () => {
  test('escapes HTML special characters', () => {
    expect(escapeHtml(`<a href="x" title='y'>Tom & Jerry</a>`))
      .toBe('&lt;a href=&quot;x&quot; title=&#39;y&#39;&gt;Tom &amp; Jerry&lt;/a&gt;');
  });

  test('leaves plain text unchanged', () => {
    expect(escapeHtml('This is a normal message!')).toBe('This is a normal message!');
  });
});
