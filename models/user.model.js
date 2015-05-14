"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: {
    type: String,
    required: 'Please type in your first name'
  },
  lastname: {
    type: String,
    required: 'Please enter your lastname'
  },
  password: {
    type: String,
    required: 'Please enter your password'
  }, 
  email: {
    type: String,
    required: 'Please enter your email',
    unique: true,
    dropDups: true
  },
  token: {
    type: String
  },
  eventsCreated: [{
    type: Schema.ObjectId,
    ref: 'Events'
  }],
  eventsJoined: [{
    type: Schema.ObjectId,
    ref: 'Events'
  }]

});
exports.model = mongoose.model('User', userSchema);
