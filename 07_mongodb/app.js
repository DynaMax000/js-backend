const express = require('express');
const app = express();
const userModles = require('./userModels');
const userModels = require('./userModels');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// create, read, update, delete operations
// CRUD operations for User model

app.get('/create-user', async (req, res) => {
  let createdUser = await userModles.create({
    name: 'Raman Doe',
    email: 'raman@example.com',
    password: 'password123',
  })
  res.send(createdUser);
});

app.get('/update-user', async (req, res) => {
  let updatedUser = await userModels.findOneAndUpdate(
    {
      name: 'John Doe',
    },
    {
      name: 'Jane Doe'
    },
    {
      new: true
    }
  )
  res.send(updatedUser);
});

app.get('/read-user', async (req, res) => {
  let readUser = await userModels.find({
    name: 'Jane Doe'
  });
  // find returns an array, so we can send it directly
  // or we can use findOne if we expect a single document
  res.send(readUser);
});

app.get('/delete-user', async (req, res) => {
  let deletedUser = await userModels.findOneAndDelete({
    name: 'Jane Doe'
  });
  res.send(deletedUser);
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});