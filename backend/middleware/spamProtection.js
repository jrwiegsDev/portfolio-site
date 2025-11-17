// backend/middleware/spamProtection.js
const rateLimit = require('express-rate-limit');

// Rate limiter for public forms (e.g., contact form)
// Allows 5 submissions per hour per IP address
const publicFormLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many submissions from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware to validate honeypot field
// The 'website' field should be empty (hidden from users, filled by bots)
const validateHoneypot = (req, res, next) => {
  if (req.body.website) {
    return res.status(400).json({ message: 'Spam detected' });
  }
  next();
};

// Middleware to validate form submission timing
// Forms should take at least MIN_SUBMIT_TIME to complete (human behavior)
const MIN_SUBMIT_TIME = 3000; // 3 seconds

const validateSubmissionTiming = (req, res, next) => {
  const { formLoadTime } = req.body;
  
  if (!formLoadTime) {
    return res.status(400).json({ message: 'Invalid submission' });
  }

  const timeTaken = Date.now() - parseInt(formLoadTime);
  if (timeTaken < MIN_SUBMIT_TIME) {
    return res.status(400).json({ message: 'Submission too fast' });
  }

  next();
};

// Middleware to sanitize request body
// Removes potentially dangerous HTML/script tags
const sanitizeRequestBody = (req, res, next) => {
  const sanitize = (value) => {
    if (typeof value === 'string') {
      // Remove script tags and dangerous HTML
      return value
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, ''); // Remove event handlers like onclick=
    }
    return value;
  };

  // Sanitize all string values in request body
  if (req.body) {
    Object.keys(req.body).forEach(key => {
      req.body[key] = sanitize(req.body[key]);
    });
  }

  next();
};

module.exports = {
  publicFormLimiter,
  validateHoneypot,
  validateSubmissionTiming,
  sanitizeRequestBody
};
