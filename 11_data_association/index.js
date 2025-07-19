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
});

app.get('/post/create', async(req, res) => {
  let post = await postModel.create({
    postdata: 'This is a post',
    user: '687be4d9595dc045f0085449',
  });

  let user = await userModel.findOne({_id: '687be4d9595dc045f0085449'});
  user.posts.push(post._id);
  user.save();

  res.send({ post, user });
});

app.listen(4000, () => {
  console.log('http://localhost:4000');
})