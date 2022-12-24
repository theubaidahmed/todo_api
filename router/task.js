const express = require("express");
const completeTask = require("../routes/task/completeTask");
const createTask = require("../routes/task/createTask");
const deleteTask = require("../routes/task/deleteTask");
const renameTask = require("../routes/task/renameTask");

const task = express.Router();

task.post("/create/:id", createTask);
task.delete("/delete/:todoId/:taskId", deleteTask);
task.patch("/rename/:todoId/:taskId", renameTask);
task.get("/complete/:todoId/:taskId", completeTask);

module.exports = task;
