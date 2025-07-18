const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.cookie('name', 'davy jones sdfs');
//   res.send('done');
// });

// bcrypt
// let pass;
// app.get('/', (req, res) => {

//   // creating a salt and hashing a password
//   bcrypt.genSalt(10, function (err, salt) {

//     bcrypt.hash("password", salt, function (err, hash) {
//       pass = hash;
//       console.log(pass);
//       res.send('done');
      
//       // comparing the password with the hash
//       bcrypt.compare("password", pass, function (err, result) {
//         console.log(result);
//       });
//     });
//   });
// });

app.get('/', (req, res) => {
  let token = jwt.sign({ email: "test@example.com"}, 'secret');
  console.log(token);
  res.cookie('token', token);
  res.send('done');
});

app.get('/read', (req, res) => {
  console.log(req.cookies.token);
  let data = jwt.verify(req.cookies.token, 'secret');
  console.log(data);
  res.send('done');
});

app.listen(4000, () => {
  console.log('http://localhost:4000');
}); 