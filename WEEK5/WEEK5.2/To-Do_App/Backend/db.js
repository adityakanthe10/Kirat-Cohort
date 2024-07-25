const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://adityakanthe10:RPSCsMT1DVeBlyJV@cluster0.e5jivf0.mongodb.net/todos"
);

const todoSchema = {
  title: String,
  description: String,
  completed: Boolean,
};

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
