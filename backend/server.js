// Use CommonJS for better Jest compatibility
// Load environment variables before any module reads process.env
require('dotenv').config({ quiet: true });

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const contactRoutes = require('./routes/contactRoutes');

// Create the Express app and define the port
const app = express();
const PORT = process.env.PORT || 5001;

// Render terminates TLS at a proxy in front of the app. Trust exactly one hop so
// req.ip is the visitor's address (used by the rate limiter), not the proxy's.
app.set('trust proxy', 1);

// --- Middleware ---
// Security headers (also removes X-Powered-By)
app.use(helmet());

// CORS configuration - allow requests from your frontend domain
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json({ limit: '10kb' }));

// --- Health Check ---
// For Render's health check: confirms the app is up and serving requests
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// --- API Routes ---
app.use('/api/contact', contactRoutes);

// --- Fallback Handlers ---
app.use((req, res) => {
  res.status(404).json({ msg: 'Not found.' });
});

// eslint-disable-next-line no-unused-vars -- Express needs all four args to treat this as an error handler
app.use((err, req, res, next) => {
  // Body parser errors carry a 4xx status (malformed JSON, body too large)
  const status = err.status || err.statusCode || 500;
  if (status >= 500) {
    console.error('Unhandled error:', err);
    return res.status(500).json({ msg: 'Something went wrong.' });
  }
  res.status(status).json({ msg: status === 413 ? 'Message is too large.' : 'Invalid request.' });
});

// Export app for testing
module.exports = app;

// --- Start the Server ---
if (require.main === module) {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

  // Render sends SIGTERM before replacing an instance during a deploy:
  // stop accepting connections and let in-flight requests (e.g. an email send) finish.
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => process.exit(0));
  });
}
