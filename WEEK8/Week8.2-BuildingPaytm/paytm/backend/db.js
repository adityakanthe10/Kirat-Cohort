// Backend for Users

const mongoose = require("mongoose");

// Creating a schema for users

const userSchema = new mongoose.Schema({
  userName: {
    type: string,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: string,
    require: true,
    minLength: 6,
  },
  firstName: {
    type: string,
    require: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: string,
    require: true,
    trim: true,
    maxLength: 50,
  },
});

// Creating a Model

const userModel = mongoose.model("User", userSchema);

// Exportting a model

module.exports = {
  User,
};
