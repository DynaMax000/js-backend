const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const userModel = require('./models/user.models');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
} );

app.get('/read', async (req, res) => {
  let allUsers = await userModel.find()
  res.render('users', { users: allUsers });
});

app.get('/delete-user/:id', async (req, res) => {
  let users = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect('/read');
});

app.post('/create', async (req, res) => {
  let {name, email, image} = req.body;
  let createdUser = await userModel.create({
    name,
    image,
    email
  });
  res.send(createdUser)
});

app.get('/edit-user/:id', async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.id });
  res.render('edit', { user });
});

app.post('/update/:id', async (req, res) => {
  let {name, email, image} = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: req.params.id },
    { name, email, image },
    { new: true }
  );
  res.redirect('/read');
});

app.listen(5000, ()=> {
  console.log('http://localhost:5000');
});