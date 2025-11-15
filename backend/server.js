// Use the modern 'import' syntax for all packages
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Initialize dotenv to load environment variables
dotenv.config();

// Create the Express app and define the port
const app = express();
const PORT = process.env.PORT || 5001;

// --- Middleware ---
// CORS configuration - allow requests from your frontend domain
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// --- Nodemailer Transporter Setup ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// --- API Routes ---
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please enter all fields.' });
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ msg: 'Error sending email.' });
    }
    console.log('Email sent successfully: ' + info.response);
    res.status(200).json({ msg: 'Message sent successfully!' });
  });
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
