const Todo = require("../../schemas/Todo");

module.exports = function (req, res) {
    const { todoId } = req.params;
    const { taskId } = req.params;

    console.log(todoId, taskId);

    Todo.updateOne(
        { _id: todoId, tasks: { $elemMatch: { _id: taskId } } },
        { $set: { "tasks.$.completed": true } }
    )
        .then(result => {
            res.json({ success: result.modifiedCount });
        })
        .catch(err => res.end(err));
};
