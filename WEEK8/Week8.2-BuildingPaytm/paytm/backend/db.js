// Backend for Users

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://adityakanthe10:ZEnp7QgoNfjKw3TI@cluster0.jgdz0.mongodb.net/Pay-TM"
);

// Creating a schema for users

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    require: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    require: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
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

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account,
};
