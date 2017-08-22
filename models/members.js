const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  profilePic: String,
  password: {type: String, required: true},
  zipcode: String,
  wishlist: []
});

const Members = mongoose.model('Member', memberSchema);

module.exports = Members;
