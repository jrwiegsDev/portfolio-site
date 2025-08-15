// Import necessary packages
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Import nodemailer
require('dotenv').config();

// Create the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- Nodemailer Transporter Setup ---
// This is the object that will send the email.
// We're using our secret credentials from the .env file.
const transporter = nodemailer.createTransport({
  service: 'gmail', // We are using a gmail account
  auth: {
    user: process.env.EMAIL_USER, // Your sending email address
    pass: process.env.EMAIL_PASS  // Your 16-character App Password
  }
});

// Verify the transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});


// API endpoint for handling contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all fields.' });
  }

  // Define the email content
  const mailOptions = {
    from: name, // Sender's name
    to: process.env.EMAIL_USER, // Your personal email to receive messages
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <p>You have a new contact form submission</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ msg: 'Error sending email.' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ msg: 'Message sent successfully!' });
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
