const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  username: String,
  profilePic: String,
  password: String,
  location: String,
  wishlist: Array
})

module.exports = ('User', userSchema);
