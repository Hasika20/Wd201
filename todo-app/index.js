/* eslint-disable no-unused-vars */
const { req, res } = require("express");
const express = require("express");
const app = express();
const { Todo } = require("./models");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     res.send("hello, world!");
// })

app.get("/todos", (req, res) => {
  console.log("Todo List");
});

app.post("/todos", async (req, res) => {
  console.log("Create a todo", req.body);
  //Todo
  try {
    const todo = await Todo.create({
      title: req.body.title,
      dueDate: req.body.dueDate,
      completed: false,
    });
    return res.json(todo);
  } catch (error) {
    console.log(error);
    return res.status(422).json(error);
  }
});

app.put("/todos/:id/markAsCompleted", (req, res) => {
  console.log("We have to update a todo with ID:", req.params.id);
});

app.delete("/todos/:id", (req, res) => {
  console.log("Delete a todo by Id:", req.params.id);
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
