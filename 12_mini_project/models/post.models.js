const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mini_project');

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
  },
  // id's of user that liked the post
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Post', postSchema)