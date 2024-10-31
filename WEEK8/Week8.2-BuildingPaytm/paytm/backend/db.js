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

// Bank Related Schema

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

// Creating a Model

const userModel = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account,
};
