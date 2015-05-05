var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: String,
  lastname: String,
  password: String,
  email: String
});

mongoose.model('user', userSchema);