const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 username: {type: String, required: true, unique: true},
 password: String
});





module.exports = mongoose.model('UserSchema', UserSchema);
