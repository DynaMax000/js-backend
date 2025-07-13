const express = require("express");
const app = express();

app.use(express.json()); // to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies

// middleware
app.use((req, res, next) => {
  console.log("Challae");
  next(); // go to next middleware or route handler
});

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h2>About Page</h2>');
});

app.get('/contact', (req, res) => {
  res.send('<h2>Contact Page</h2>');
});

app.get('/profile', (req, res, next) => {   
  return next(new Error('Profile not found')); // backend error handling
});

// error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Error found!'); // frontend error handling
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
