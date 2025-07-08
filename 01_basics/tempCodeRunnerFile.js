const express = require('express');
// import express from 'express'; // Uncomment if using ES6 modules
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
