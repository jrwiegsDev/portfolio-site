// Use CommonJS for better Jest compatibility
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

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

// --- API Routes ---
app.use('/api/contact', contactRoutes);

// Export app for testing
module.exports = app;

// --- Start the Server ---
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}
