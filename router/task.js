import express from 'express';
import completeTask from '../routes/task/completeTask.js';
import createTask from '../routes/task/createTask.js';
import deleteTask from '../routes/task/deleteTask.js';
import renameTask from '../routes/task/renameTask.js';

const task = express.Router();

task.post('/create/:id', createTask);
task.delete('/delete/:todoId/:taskId', deleteTask);
task.patch('/rename/:todoId/:taskId', renameTask);
task.get('/complete/:todoId/:taskId', completeTask);

export default task;
