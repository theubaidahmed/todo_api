const express = require("express");

const createTodo = require("../routes/todo/createTodo");
const deleteTodo = require("../routes/todo/deleteTodo");
const renameTodo = require("../routes/todo/renameTodo");

const todo = express.Router();

todo.post("/create", createTodo);
// todo.get("/", viewTask);
todo.delete("/delete/:id", deleteTodo);
todo.patch("/rename/:id", renameTodo);

module.exports = todo;
