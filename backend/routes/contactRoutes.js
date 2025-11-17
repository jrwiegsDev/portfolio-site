// backend/routes/contactRoutes.js
const express = require('express');
const nodemailer = require('nodemailer');
const {
  publicFormLimiter,
  sanitizeRequestBody,
  validateHoneypot,
  validateSubmissionTiming
} = require('../middleware/spamProtection');

const router = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// @desc   Send contact form message via email
// @route  POST /api/contact
// @access Public (with spam protection)
router.post(
  '/',
  publicFormLimiter,
  sanitizeRequestBody,
  validateHoneypot,
  validateSubmissionTiming,
  async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields.' });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ msg: 'Please enter a valid email address.' });
      }

      const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Message from ${name} via Portfolio`,
        html: `
          <h2>You have a new contact form submission</h2>
          <h3>Contact Details</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
          </ul>
          <h3>Message</h3>
          <p>${message}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('Contact form email sent successfully');
      res.status(200).json({ msg: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ msg: 'Error sending email.' });
    }
  }
);

module.exports = router;
