const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
    lowercase: true
  },
  image: {
    type: String,
  }
});

module.exports = mongoose.model('User', userSchema);