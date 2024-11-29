const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/files', fileRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Gracefully handle server shutdown
process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  mongoose.connection.close().then(() => {
    console.log('MongoDB connection closed');
    process.exit(0); // Ensure the process exits cleanly
  }).catch((err) => {
    console.error('Error closing MongoDB connection:', err);
    process.exit(1); // Exit with error code if connection closing fails
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
