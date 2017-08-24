const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
  animal: String,
  breed: String,
  size: String,
  sex: String,
  age: String,
  location: String,
  shelterId: String,
});

const Pets = mongoose.model('Pet', petSchema);

module.exports = Pets;
