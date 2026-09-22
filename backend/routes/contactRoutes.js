// backend/routes/contactRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const {
  publicFormLimiter,
  validateHoneypot,
  validateSubmissionTiming
} = require('../middleware/spamProtection');
const { validateContactInput } = require('../middleware/validateContact');
const escapeHtml = require('../utils/escapeHtml');

const router = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Builds the notification email. All user input is escaped before it goes into HTML,
// and line breaks are stripped from the subject so they can't inject headers.
const buildContactEmail = ({ name, email, message }) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

  return {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Message from ${name.replace(/[\r\n]+/g, ' ')} via Portfolio`,
    text: `You have a new contact form submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>You have a new contact form submission</h2>
      <h3>Contact Details</h3>
      <ul>
        <li><strong>Name:</strong> ${safeName}</li>
        <li><strong>Email:</strong> ${safeEmail}</li>
      </ul>
      <h3>Message</h3>
      <p>${safeMessage}</p>
    `
  };
};

// @desc   Send contact form message via email
// @route  POST /api/contact
// @access Public (with spam protection)
router.post(
  '/',
  publicFormLimiter,
  validateHoneypot,
  validateSubmissionTiming,
  validateContactInput,
  async (req, res) => {
    try {
      await transporter.sendMail(buildContactEmail(req.contact));
      console.log('Contact form email sent successfully');
      res.status(200).json({ msg: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ msg: 'Error sending email.' });
    }
  }
);

module.exports = router;
