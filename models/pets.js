const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = mongoose.Schema({
  animal: String,
  breed: String,
  size: String,
  sex: String,
  location: String,
  shelterId: String
})

module.exports = mongoose.model('Pet', petSchema);
