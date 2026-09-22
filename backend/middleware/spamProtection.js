// backend/middleware/spamProtection.js
const rateLimit = require('express-rate-limit');

// Rate limiter for public forms (e.g., contact form)
// Allows 5 submissions per hour per IP address.
// Relies on `trust proxy` (set in server.js) so req.ip is the visitor's IP, not Render's proxy.
const publicFormLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 5, // Limit each IP to 5 requests per windowMs
  message: { msg: 'Too many submissions from this IP, please try again later.' },
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});

// Middleware to validate honeypot field
// The 'website' field should be empty (hidden from users, filled by bots)
const validateHoneypot = (req, res, next) => {
  const { website } = req.body || {};
  if (website) {
    return res.status(400).json({ msg: 'Spam detected' });
  }
  next();
};

// Middleware to validate form submission timing
// Forms should take at least MIN_SUBMIT_TIME to complete (human behavior)
const MIN_SUBMIT_TIME = 3000; // 3 seconds

const isTimestamp = (value) =>
  (typeof value === 'number' && Number.isFinite(value)) ||
  (typeof value === 'string' && /^\d{1,15}$/.test(value));

const validateSubmissionTiming = (req, res, next) => {
  const { formLoadTime } = req.body || {};

  if (!isTimestamp(formLoadTime)) {
    return res.status(400).json({ msg: 'Invalid submission' });
  }

  const timeTaken = Date.now() - Number(formLoadTime);
  if (timeTaken < 0) {
    return res.status(400).json({ msg: 'Invalid submission' });
  }
  if (timeTaken < MIN_SUBMIT_TIME) {
    return res.status(400).json({ msg: 'Submission too fast' });
  }

  next();
};

module.exports = {
  publicFormLimiter,
  validateHoneypot,
  validateSubmissionTiming
};
