const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'client')));

// Fallback to 'index.html' for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
