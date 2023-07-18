import Todo from '../../schemas/Todo.js';

export default function (req, res) {
    const { todoId } = req.params;
    const { taskId } = req.params;
    const { task } = req.body;

    Todo.updateOne(
        { _id: todoId, tasks: { $elemMatch: { _id: taskId } } },
        { $set: { 'tasks.$.task': task } }
    )
        .then(result => {
            res.json({
                success: result.modifiedCount,
            });
        })
        .catch(e => res.end(e));
}
