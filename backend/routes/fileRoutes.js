const express = require('express');
const multer = require('multer');
const { uploadFile, getFiles } = require('../controllers/fileController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), uploadFile);
router.get('/', getFiles);

module.exports = router;
