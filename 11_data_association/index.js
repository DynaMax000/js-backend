const express = require('express');
const app = express();

const userModel = require('./models/user.models');
const postModel = require('./models/post.models');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/create-user', async(req, res) => {
  let user = await userModel.create({
    username: 'John Doe',
    email: 'test@example.com',
    age: 30,
  });

  res.send(user);
})

app.listen(4000, () => {
  console.log('http://localhost:4000');
})