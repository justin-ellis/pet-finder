const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
  animal: String,
  breeds: String,
  size: String,
  sex: String,
  age: String,
  location: String,
  shelterId: String
});

const Pets = mongoose.model('Pet', petSchema);

module.exports = Pets;
