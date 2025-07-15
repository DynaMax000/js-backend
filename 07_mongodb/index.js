const express = require('express');
const app = express();

app.get('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
} );