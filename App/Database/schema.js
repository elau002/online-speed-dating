var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
  password: String,
  userinfo: String,
  name: String,
  Age: Number,
  Location: String
});
 
exports.userSchema = userSchema;
