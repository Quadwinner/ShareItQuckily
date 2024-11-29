const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: Number },
  path: { type: String, required: true },
  type: { type: String, required: true },
  link: { type: String, required: true }, // Generated link
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', fileSchema);
