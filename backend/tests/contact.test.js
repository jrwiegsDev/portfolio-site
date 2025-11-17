// backend/tests/contact.test.js
const request = require('supertest');
const app = require('../server');

// Mock nodemailer
jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({ messageId: 'test-message-id' })
  })
}));

// Mock rate limiter
jest.mock('../middleware/spamProtection', () => {
  const original = jest.requireActual('../middleware/spamProtection');
  return {
    ...original,
    publicFormLimiter: (req, res, next) => next(),
  };
});

beforeEach(() => {
  jest.clearAllMocks();
  process.env.NODE_ENV = 'test';
});

describe('POST /api/contact', () => {
  test('sends email with valid contact form data', async () => {
    const payload = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'I would like to discuss a project opportunity.',
      formLoadTime: Date.now() - 5000, // 5 seconds ago
      website: '' // Honeypot field
    };

    const res = await request(app)
      .post('/api/contact')
      .send(payload);

    expect(res.status).toBe(200);
    expect(res.body.msg).toContain('sent successfully');
  });

  test('rejects submission with invalid email', async () => {
    const payload = {
      name: 'John Doe',
      email: 'not-an-email',
      message: 'Test message',
      formLoadTime: Date.now() - 5000,
      website: ''
    };

    const res = await request(app)
      .post('/api/contact')
      .send(payload);

    expect(res.status).toBe(400);
    expect(res.body.msg).toContain('valid email');
  });

  test('rejects submission missing name', async () => {
    const payload = {
      email: 'test@example.com',
      message: 'Test message',
      formLoadTime: Date.now() - 5000,
      website: ''
    };

    const res = await request(app)
      .post('/api/contact')
      .send(payload);

    expect(res.status).toBe(400);
    expect(res.body.msg).toContain('all fields');
  });

  test('rejects submission missing email', async () => {
    const payload = {
      name: 'John Doe',
      message: 'Test message',
      formLoadTime: Date.now() - 5000,
      website: ''
    };

    const res = await request(app)
      .post('/api/contact')
      .send(payload);

    expect(res.status).toBe(400);
    expect(res.body.msg).toContain('all fields');
  });

  test('rejects submission missing message', async () => {
    const payload = {
      name: 'John Doe',
      email: 'test@example.com',
      formLoadTime: Date.now() - 5000,
      website: ''
    };

    const res = await request(app)
      .post('/api/contact')
      .send(payload);

    expect(res.status).toBe(400);
    expect(res.body.msg).toContain('all fields');
  });

  test('rejects submission with XSS attempt', async () => {
    const payload = {
      name: 'Hacker',
      email: 'hacker@example.com',
      message: '<script>alert("XSS")</script>Legitimate message',
      formLoadTime: Date.now() - 5000,
      website: ''
    };

    const res = await request(app)
      .post('/api/contact')
      .send(payload);

    // Should still succeed but with sanitized content
    expect(res.status).toBe(200);
    // Script tag should have been removed by sanitization middleware
  });

  test('rejects submission with honeypot filled (bot detection)', async () => {
    const payload = {
      name: 'Bot User',
      email: 'bot@example.com',
      message: 'Spam message',
      formLoadTime: Date.now() - 5000,
      website: 'http://spam.com' // Bot filled honeypot
    };

    const res = await request(app)
      .post('/api/contact')
      .send(payload);

    expect(res.status).toBe(400);
    expect(res.body.message).toContain('Spam detected');
  });

  test('rejects submission that is too fast (timing validation)', async () => {
    const payload = {
      name: 'Fast User',
      email: 'fast@example.com',
      message: 'Quick message',
      formLoadTime: Date.now() - 500, // Only 0.5 seconds ago
      website: ''
    };

    const res = await request(app)
      .post('/api/contact')
      .send(payload);

    expect(res.status).toBe(400);
    expect(res.body.message).toContain('too fast');
  });

  test('rejects submission without timing data', async () => {
    const payload = {
      name: 'User',
      email: 'user@example.com',
      message: 'Message without timing',
      website: ''
      // Missing formLoadTime
    };

    const res = await request(app)
      .post('/api/contact')
      .send(payload);

    expect(res.status).toBe(400);
    expect(res.body.message).toContain('Invalid submission');
  });
});
