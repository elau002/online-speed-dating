var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
<<<<<<< HEAD
  password: String
=======
  password: String,
  userinfo: String,
  name: String,
  age: Number,
  location: String,
  profileImg: String,
  gender: String
>>>>>>> Added new data variables to user schema
});
 
exports.userSchema = userSchema;
