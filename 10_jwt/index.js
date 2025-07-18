const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

const userModel = require('./models/user.models');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/logout', (req, res) => {
  res.clearCookie('token', '');
  res.redirect('/');
});

app.get('/login', async (req, res) => {
  res.render('login');
});

app.post('/create', (req, res) => {
  console.log(req.body);
  let { name, email, password } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) console.error('Error generating salt:', err);
    bcrypt.hash(password, salt, async (err, hash) => {
      console.log(hash);

      let createdUser = await userModel.create({
        name,
        email,
        password: hash,
      });

      let token = jwt.sign({ email }, 'secret');
      res.cookie('token', token);

      res.send(createdUser);
    })
  })
});

app.post('/login', async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  console.log(user);
  if (!user) {
    res.send('Something went wrong');
  }
  console.log(user.password, req.body.password);
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: user.email }, 'secret');
      res.cookie('token', token);
      res.send('Login successful');
    }
    else {
      res.send('Something went wrong');
    }
  });
});

app.listen(4000, () => {
  console.log('http://localhost:4000');
}); 