// models/Basic_User.js

const mongoose = require('mongoose');

const BasicUserSchema = new mongoose.Schema({


  _id: mongoose.Schema.Types.ObjectId,

  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true, 
    unique: true, 
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
},
  password: {
    type: String,
    required: true
  },
  date: {type:Date,
    default: Date.now
  }
});

module.exports = mongoose.model('basicusers', BasicUserSchema);
// Ar01 : table
// Arg02 : User sign up template

/*
  verifyEmail: {
    type: String,
    required: true
  },
  password01: {
    type: String,
    required: true
  },

*/