import express from 'express'; // Importing module 
// const express = require('express'); // Importing commonjs 

const app = express();
const port = process.env.PORT || 4000;
// const port = 5000;


app.get('/', (req, res) => {
  res.send('server is ready!');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: 'first joke', joke: 'Why did the chicken cross the road? To get to the other side!' },
    { id: 2, title: 'second joke', joke: 'What do you call fake spaghetti? An impasta!' },
    { id: 3, title: 'third joke', joke: 'Why don’t scientists trust atoms? Because they make up everything!' },
    { id: 4, title: 'fourth joke', joke: 'Why did the bicycle fall over? Because it was two-tired!' },
    { id: 5, title: 'fifth joke', joke: 'What do you call a fake noodle? An impasta!' },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});