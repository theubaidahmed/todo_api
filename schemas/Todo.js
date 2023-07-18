import { mongoose } from 'mongoose';

const Task = new mongoose.Schema({
    task: { type: String, minlength: 3, maxlength: 30, required: true },
    completed: { type: Boolean, default: false, required: true },
    createdAt: { type: Date, default: new Date(), required: true },
    completedAt: { type: Date, required: () => this.completed },
});

const Todo = new mongoose.Schema({
    name: { type: String, minlength: 3, maxlength: 30, required: true },
    tasks: [Task],
    createdAt: { type: Date, default: new Date(), required: true },
});

Todo.virtual('completed').get(function () {
    return this.tasks.every(task => task.completed);
});

export default mongoose.model('todo', Todo);
