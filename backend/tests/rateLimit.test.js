// backend/tests/rateLimit.test.js
// Uses the real rate limiter to check it keys on the visitor's IP behind Render's proxy.
jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({ sendMail: jest.fn().mockResolvedValue({}) }))
}));

const request = require('supertest');
const app = require('../server');

// Requests fail validation (empty body) but still count toward the limit
const postFrom = (ip) => request(app).post('/api/contact').set('X-Forwarded-For', ip).send({});

describe('publicFormLimiter', () => {
  test('blocks a visitor after 5 requests without blocking other visitors', async () => {
    for (let i = 0; i < 5; i++) {
      const res = await postFrom('203.0.113.10');
      expect(res.status).toBe(400);
    }

    const blocked = await postFrom('203.0.113.10');
    expect(blocked.status).toBe(429);
    expect(blocked.body.msg).toContain('Too many submissions');

    const otherVisitor = await postFrom('198.51.100.20');
    expect(otherVisitor.status).toBe(400);
  });
});
