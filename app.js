const express = require("express");
const morgan = require("morgan");
const task = require("./router/task");
const todo = require("./router/todo");
const index = require("./routes/index");

const app = new express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/todo", todo);
app.use("/task", task);
app.get("/", index);

module.exports = app;
