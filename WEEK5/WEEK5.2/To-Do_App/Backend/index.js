// write a basic express boilerplate code ,starting with express.json(middleware)

const express = require("express");
const { createTodo } = require("./types.js");
const { updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    req.status(411).json({
      msg: "You sent the  wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "todo created successfully",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});

  res.json({ todos });
});

app.put("/completed", async (req, res) => {
  const completedPayload = req.body;
  const parsedPayload = updateTodo.safeParse(completedPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000);
