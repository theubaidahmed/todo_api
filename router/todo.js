import express from 'express';

import createTodo from '../routes/todo/createTodo.js';
import deleteTodo from '../routes/todo/deleteTodo.js';
import renameTodo from '../routes/todo/renameTodo.js';

const todo = express.Router();

todo.post('/create', createTodo);
// todo.get("/", viewTask);
todo.delete('/delete/:id', deleteTodo);
todo.patch('/rename/:id', renameTodo);

export default todo;
