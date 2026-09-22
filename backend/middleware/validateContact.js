// backend/middleware/validateContact.js
// Validates contact form input. Text is kept exactly as submitted (trimmed);
// it is escaped wherever it is rendered as HTML instead of being altered here.

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  message: 5000
};

const FIELD_LABELS = {
  name: 'Name',
  email: 'Email',
  message: 'Message'
};

const SOURCES = ['contact_page', 'business_card'];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateContactInput = (req, res, next) => {
  const { name, email, message, source = 'contact_page' } = req.body || {};
  const raw = { name, email, message };

  // Every field must be a non-empty string (rejects numbers, arrays, objects)
  if (Object.values(raw).some((value) => typeof value !== 'string' || value.trim() === '')) {
    return res.status(400).json({ msg: 'Please enter all fields.' });
  }

  const fields = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim()
  };

  for (const [field, maxLength] of Object.entries(MAX_LENGTHS)) {
    if (fields[field].length > maxLength) {
      return res.status(400).json({ msg: `${FIELD_LABELS[field]} must be ${maxLength} characters or fewer.` });
    }
  }

  if (!EMAIL_REGEX.test(fields.email)) {
    return res.status(400).json({ msg: 'Please enter a valid email address.' });
  }

  if (!SOURCES.includes(source)) {
    return res.status(400).json({ msg: 'Invalid submission' });
  }

  req.contact = { ...fields, source };
  next();
};

module.exports = {
  validateContactInput,
  MAX_LENGTHS
};
