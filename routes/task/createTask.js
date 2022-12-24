const Todo = require("../../schemas/Todo");

module.exports = async function (req, res) {
    const { tasks } = req.body;
    const { id } = req.params;

    console.log(tasks);
    if (!tasks.length || !id) return res.end("Add task first");

    Todo.updateOne({ _id: id }, { $push: { tasks: tasks.map(task => ({ task })) } })
        .then(result => {
            res.json({
                modified: result.modifiedCount,
                success: 1,
            });
        })
        .catch(err => {
            res.json({
                success: 0,
                error: err,
            });
        });

    // console.log((await Todo.findById(id)).completed);
};
