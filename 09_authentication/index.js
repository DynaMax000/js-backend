const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie('name', 'davy jones sdfs');
  res.send('done');
});

app.get('/read', (req, res) => {
  console.log(req.cookies);
  res.send('done');
});

app.listen(4000, () => {
  console.log('http://localhost:4000');
}); 