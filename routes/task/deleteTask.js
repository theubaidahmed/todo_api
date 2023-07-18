import Todo from '../../schemas/Todo.js';

export default function (req, res) {
    const { todoId } = req.params;
    const { taskId } = req.params;

    Todo.updateOne({ _id: todoId }, { $pull: { tasks: { _id: taskId } } })
        .then(result => {
            res.json({ success: result.modifiedCount });
        })
        .catch(res.end);
}
