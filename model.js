const mongoose = require('mongoose');

const OpenCrud = mongoose.model('OpenCrud', {
  name: String,
  comment: String,
  dateOfBirth: Date,
  age: Number,
});

module.exports = OpenCrud