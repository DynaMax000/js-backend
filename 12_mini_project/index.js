const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('./models/user.models');
const postModel = require('./models/post.models');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/profile', isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email }).populate('post');
  res.render('profile', { user });
});

app.get('/like/:_id', isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params._id }).populate('user');
  if (post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
  }
  else {
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }
  await post.save();
  res.redirect("/profile");
});

app.get('/edit/:_id', isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params._id }).populate('user');
  // Check if the user owns this post
  if (post.user._id.toString() !== req.user.userid) {
    return res.redirect('/profile');
  }
  res.render("edit", { post });
});

app.get('/logout', (req, res) => {
  res.clearCookie('token', ' ');
  res.redirect('/login');
});

app.get('/test', isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email }).populate('post');
  res.render('test', { user }); 
});

app.post('/register', async (req, res) => {
  let { username, name, email, age, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).send('User already exists');
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        username,
        name,
        email,
        age,
        password: hash
      });
      let token = jwt.sign({ email: email, userid: user._id }, "secret");
      res.cookie("token", token);
      res.send('User registered successfully');
    });
  })
});

app.post('/login', async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).send('User not found');
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "secret");
      res.cookie('token', token);
      res.redirect('/profile');
    }
    else {
      res.redirect('/login');
    }
  });
});

app.post('/post', isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let post = await postModel.create({
    user: user._id,
    content: req.body.content
  });

  user.post.push(post._id);
  await user.save();
  res.redirect('/profile');
});

function isLoggedIn(req, res, next) {
  token = req.cookies.token;
  if (req.cookies.token === undefined) {
    return res.redirect('/login');
  }
  else {
    let data = jwt.verify(req.cookies.token, 'secret');
    req.user = data;
    next();
  }
};

app.post('/update/:_id', isLoggedIn, async (req, res) => {
  let post = await postModel.findOneAndUpdate({ _id: req.params._id }, {content: req.body.content}, {new: true});
  res.redirect("/profile");
});

app.post('/upload', isLoggedIn, (req, res) => {
  console.log(req.file);
});


app.listen(4000, () => {
  console.log('http://localhost:4000');
});
