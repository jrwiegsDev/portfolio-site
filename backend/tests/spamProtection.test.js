// backend/tests/spamProtection.test.js
const {
  sanitizeRequestBody,
  validateHoneypot,
  validateSubmissionTiming
} = require('../middleware/spamProtection');

describe('Spam Protection Middleware', () => {
  describe('sanitizeRequestBody', () => {
    test('removes script tags from input', () => {
      const req = {
        body: {
          message: 'Hello <script>alert("xss")</script> world'
        }
      };
      const res = {};
      const next = jest.fn();

      sanitizeRequestBody(req, res, next);

      expect(req.body.message).not.toContain('<script>');
      expect(req.body.message).toBe('Hello  world');
      expect(next).toHaveBeenCalled();
    });

    test('removes dangerous HTML from input', () => {
      const req = {
        body: {
          message: '<iframe src="evil.com"></iframe>Normal text'
        }
      };
      const res = {};
      const next = jest.fn();

      sanitizeRequestBody(req, res, next);

      expect(req.body.message).not.toContain('<iframe>');
      expect(req.body.message).toBe('Normal text');
      expect(next).toHaveBeenCalled();
    });

    test('preserves safe text content', () => {
      const req = {
        body: {
          name: 'John Doe',
          message: 'This is a normal message!'
        }
      };
      const res = {};
      const next = jest.fn();

      sanitizeRequestBody(req, res, next);

      expect(req.body.name).toBe('John Doe');
      expect(req.body.message).toBe('This is a normal message!');
      expect(next).toHaveBeenCalled();
    });

    test('handles special characters safely', () => {
      const req = {
        body: {
          message: 'Test & <test> "quotes"'
        }
      };
      const res = {};
      const next = jest.fn();

      sanitizeRequestBody(req, res, next);

      expect(req.body.message).toContain('&');
      expect(next).toHaveBeenCalled();
    });
  });

  describe('validateHoneypot', () => {
    test('validates honeypot field is empty', () => {
      const req = {
        body: {
          name: 'John',
          website: '' // Empty honeypot - legitimate user
        }
      };
      const res = {};
      const next = jest.fn();

      validateHoneypot(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    test('rejects submission with filled honeypot', () => {
      const req = {
        body: {
          name: 'Bot',
          website: 'http://spam.com' // Filled honeypot - bot
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const next = jest.fn();

      validateHoneypot(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Spam detected' });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('validateSubmissionTiming', () => {
    test('validates timing for legitimate submission', () => {
      const req = {
        body: {
          formLoadTime: Date.now() - 5000 // 5 seconds ago
        }
      };
      const res = {};
      const next = jest.fn();

      validateSubmissionTiming(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    test('rejects submission that is too fast', () => {
      const req = {
        body: {
          formLoadTime: Date.now() - 500 // 0.5 seconds ago
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const next = jest.fn();

      validateSubmissionTiming(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Submission too fast' });
      expect(next).not.toHaveBeenCalled();
    });

    test('rejects submission without formLoadTime', () => {
      const req = {
        body: {}
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const next = jest.fn();

      validateSubmissionTiming(req, res, next);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Invalid submission' });
      expect(next).not.toHaveBeenCalled();
    });
  });
});
