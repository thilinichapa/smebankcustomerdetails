const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from host OR fallback to 3000

// Serve the index.html and other static files
app.use(express.static('public'));

// Serve PDF files from the uploads folder
app.use('/pdfs', express.static('uploads'));

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

