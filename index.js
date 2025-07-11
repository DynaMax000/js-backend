const express = require('express');
require('dotenv').config();

const app = new express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
} );

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});