const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});