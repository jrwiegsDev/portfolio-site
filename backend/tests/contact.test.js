// backend/tests/contact.test.js
const mockSendMail = jest.fn();

// Mock nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({ sendMail: mockSendMail }))
}));

// Mock rate limiter (covered separately in rateLimit.test.js)
jest.mock('../middleware/spamProtection', () => {
  const original = jest.requireActual('../middleware/spamProtection');
  return {
    ...original,
    publicFormLimiter: (req, res, next) => next(),
  };
});

const request = require('supertest');
const app = require('../server');

const validPayload = (overrides = {}) => ({
  name: 'Jane Doe',
  email: 'jane@example.com',
  message: 'I would like to discuss a project opportunity.',
  formLoadTime: Date.now() - 5000, // 5 seconds ago
  website: '', // Honeypot field
  ...overrides
});

const postContact = (payload) => request(app).post('/api/contact').send(payload);

beforeEach(() => {
  jest.clearAllMocks();
  mockSendMail.mockResolvedValue({ messageId: 'test-message-id' });
});

describe('POST /api/contact', () => {
  test('sends email with valid contact form data', async () => {
    const res = await postContact(validPayload());

    expect(res.status).toBe(200);
    expect(res.body.msg).toContain('sent successfully');
    expect(mockSendMail).toHaveBeenCalledTimes(1);
    expect(mockSendMail.mock.calls[0][0].replyTo).toBe('jane@example.com');
  });

  test('returns 500 when the email fails to send', async () => {
    mockSendMail.mockRejectedValueOnce(new Error('SMTP down'));
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const res = await postContact(validPayload());

    expect(res.status).toBe(500);
    expect(res.body.msg).toBe('Error sending email.');
    console.error.mockRestore();
  });

  describe('validation', () => {
    test('rejects submission with invalid email', async () => {
      const res = await postContact(validPayload({ email: 'not-an-email' }));

      expect(res.status).toBe(400);
      expect(res.body.msg).toContain('valid email');
    });

    test.each(['name', 'email', 'message'])('rejects submission missing %s', async (field) => {
      const payload = validPayload();
      delete payload[field];

      const res = await postContact(payload);

      expect(res.status).toBe(400);
      expect(res.body.msg).toContain('all fields');
    });

    test('rejects whitespace-only fields', async () => {
      const res = await postContact(validPayload({ message: '   \n  ' }));

      expect(res.status).toBe(400);
      expect(res.body.msg).toContain('all fields');
    });

    test.each([
      ['an object', { first: 'Jane' }],
      ['an array', ['Jane']],
      ['a number', 42]
    ])('rejects a name that is %s', async (_label, name) => {
      const res = await postContact(validPayload({ name }));

      expect(res.status).toBe(400);
      expect(mockSendMail).not.toHaveBeenCalled();
    });

    test.each([
      ['name', 101],
      ['message', 5001]
    ])('rejects a %s longer than the limit', async (field, length) => {
      const res = await postContact(validPayload({ [field]: 'a'.repeat(length) }));

      expect(res.status).toBe(400);
      expect(res.body.msg).toContain('characters or fewer');
    });

    test('rejects an unknown source', async () => {
      const res = await postContact(validPayload({ source: 'somewhere_else' }));

      expect(res.status).toBe(400);
    });

    test('accepts the business card source', async () => {
      const res = await postContact(validPayload({ source: 'business_card' }));

      expect(res.status).toBe(200);
    });
  });

  describe('email content', () => {
    test('escapes HTML in the email body instead of rendering it', async () => {
      const res = await postContact(validPayload({
        name: '<b>Jane</b>',
        message: '<a href="https://evil.example">Verify your account</a><img src="https://tracker.example/p.gif">'
      }));

      expect(res.status).toBe(200);
      const { html } = mockSendMail.mock.calls[0][0];
      expect(html).not.toContain('<a href');
      expect(html).not.toContain('<img');
      expect(html).not.toContain('<b>Jane</b>');
      expect(html).toContain('&lt;a href=&quot;https://evil.example&quot;&gt;');
      expect(html).toContain('&lt;b&gt;Jane&lt;/b&gt;');
    });

    test('keeps the message text exactly as typed in the plain-text version', async () => {
      const message = 'My session_id=abc and I know javascript: & <React>';

      await postContact(validPayload({ message }));

      const { text, html } = mockSendMail.mock.calls[0][0];
      expect(text).toContain(message);
      expect(html).toContain('session_id=abc and I know javascript: &amp; &lt;React&gt;');
    });

    test('preserves line breaks in the HTML version', async () => {
      await postContact(validPayload({ message: 'Line one\nLine two' }));

      expect(mockSendMail.mock.calls[0][0].html).toContain('Line one<br>Line two');
    });

    test('strips line breaks from the subject', async () => {
      await postContact(validPayload({ name: 'Jane\r\nBcc: victim@example.com' }));

      const { subject } = mockSendMail.mock.calls[0][0];
      expect(subject).not.toMatch(/[\r\n]/);
    });
  });

  describe('spam protection', () => {
    test('rejects submission with honeypot filled (bot detection)', async () => {
      const res = await postContact(validPayload({ website: 'http://spam.com' }));

      expect(res.status).toBe(400);
      expect(res.body.msg).toContain('Spam detected');
    });

    test('rejects submission that is too fast (timing validation)', async () => {
      const res = await postContact(validPayload({ formLoadTime: Date.now() - 500 }));

      expect(res.status).toBe(400);
      expect(res.body.msg).toContain('too fast');
    });

    test('rejects submission without timing data', async () => {
      const payload = validPayload();
      delete payload.formLoadTime;

      const res = await postContact(payload);

      expect(res.status).toBe(400);
      expect(res.body.msg).toContain('Invalid submission');
    });

    test.each([
      ['a non-numeric string', 'abc'],
      ['a timestamp in the future', Date.now() + 60_000],
      ['null', null],
      ['a boolean', true]
    ])('rejects formLoadTime that is %s', async (_label, formLoadTime) => {
      const res = await postContact(validPayload({ formLoadTime }));

      expect(res.status).toBe(400);
      expect(mockSendMail).not.toHaveBeenCalled();
    });
  });
});

describe('server', () => {
  test('rejects request bodies over 10kb with 413', async () => {
    const res = await postContact(validPayload({ message: 'a'.repeat(11 * 1024) }));

    expect(res.status).toBe(413);
    expect(res.body.msg).toBe('Message is too large.');
  });

  test('rejects malformed JSON with 400', async () => {
    const res = await request(app)
      .post('/api/contact')
      .set('Content-Type', 'application/json')
      .send('{"name": ');

    expect(res.status).toBe(400);
    expect(res.body.msg).toBe('Invalid request.');
  });

  test('returns JSON 404 for unknown routes', async () => {
    const res = await request(app).get('/nope');

    expect(res.status).toBe(404);
    expect(res.body.msg).toBe('Not found.');
  });

  test('sends security headers and hides X-Powered-By', async () => {
    const res = await request(app).get('/nope');

    expect(res.headers['x-powered-by']).toBeUndefined();
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['content-security-policy']).toBeDefined();
  });
});
