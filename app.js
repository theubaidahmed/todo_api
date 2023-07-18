import './config/config.js';
import express from 'express';
import morgan from 'morgan';
import task from './router/task.js';
import todo from './router/todo.js';
import index from './routes/index.js';

const app = new express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/todo', todo);
app.use('/task', task);
app.get('/', index);

export default app;
