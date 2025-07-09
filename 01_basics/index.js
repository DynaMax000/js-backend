const express = require('express');
require('dotenv').config();
// console.log(process.env);

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
} );

app.get('/about', (req, res) => {
  res.send('About Page'); 
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});