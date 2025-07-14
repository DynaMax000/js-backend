const express = require('express');
const app = express();
const Path = require('path');
const fs = require('fs');

// middlewares
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  fs.readdir(`./tasks`, (error, files) => {
    res.render('index', { files: files });
  })
});

app.get('/tasks/:filename', (req, res) => {
  fs.readFile(`./tasks/${req.params.filename}`, 'utf-8', (error, filedata) => res.render("show", {filename: req.params.filename, filedata: filedata}))
});

app.get('/edit/:filename', (req, res) => {
  res.render('edit', {filename: req.params.filename});
});


app.post('/create', (req, res) => {
  fs.writeFile(`./tasks/${req.body.title.split(' ').join('-')}.txt`, req.body.details, (error) => console.log("Error: ", error));
  res.redirect("/");
});

app.post('/edit', (req, res) => {
  fs.rename(`./tasks/${req.body.previous}`, `./tasks/${req.body.next.split(' ').join('-')}`, function(error) { res.redirect("/") });
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});