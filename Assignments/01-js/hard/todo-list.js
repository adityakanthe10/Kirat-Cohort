/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    if (typeof todo !== "string" || todo.trim() === "") {
      throw new Error("Invalid Input");
    }
    this.todos.push(todo.trim());
  }

  remove(indexOfTodo) {
    if (typeof indexOfTodo !== "number") {
      throw new Error("Invalid Input");
    }
    this.todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (typeof index !== "number") {
      throw new Error("Invalid Input");
    }
    if (index >= this.todos.length) {
      return this.todos;
    }
    if (typeof updatedTodo !== "string") {
      throw new Error("Invalid Input");
    }
    this.todos[index] = updatedTodo.trim();
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (typeof indexOfTodo !== "number") {
      throw new Error("Invalid Input");
    }
    if (indexOfTodo >= this.todos.length) {
      return null;
    }
    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
