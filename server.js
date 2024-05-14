import PouchDB from "pouchdb";

const express = require('express');
const path = require('path');
const app = express();

const db = new PouchDB('dmteam');

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'src')));

// Fallback to 'index.html' for any other request
async function addDocument(doc) {
  try {
    const response = await db.put(doc);
    console.log("Document created successfully", response);
  }
  catch (error) {
    console.log(error);
  }
}

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/home.html'));
});

app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/history.html'));
});

app.get('/investing', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/investing.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/profile.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

