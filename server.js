import express, { response } from "express";
import PouchDB from "pouchdb";
// import cors from "cors";
// import Database from "./database.js";
import path from "path";
import { fileURLToPath } from "url";
// import * as url from "url";
import { dirname } from "path";
// import { promises as fs } from "fs";
const app = express();

const db = new PouchDB('dmteam');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, 'src')));

// Fallback to 'index.html' for any other request
async function addDocumentfix(doc) {
  try {
    const response = await db.put(doc);
    console.log("Document created successfully", response);
  }
  catch (error) {
    console.log(error);
  }
}

async function getDocument(id) {
  try {
    const doc = await db.get(id);
    console.log(doc);
  }
  catch (error) {
    console.log(error);
  }
}

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client/pages/home.html'));
  addDocument({_id: 'dang', data: {dz: 100}});
  getDocument('dang');
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

