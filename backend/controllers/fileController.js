const File = require('../models/File');
const path = require('path');

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = new File({
      name: req.file.originalname, // Use the original file name
      size: req.file.size, // File size
      path: req.file.path, // File path in the server
      type: req.file.mimetype, // File MIME type (image/jpeg, etc.)
      link: `http://localhost:5000/uploads/${req.file.filename}`, // Generate link for the uploaded file
    });

    await file.save(); // Save file metadata to MongoDB
    res.status(200).json({ message: 'File uploaded successfully', link: file.link });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading file' });
  }
};

const getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching files' });
  }
};

module.exports = { uploadFile, getFiles };
