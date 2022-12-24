const Todo = require("./../../schemas/Todo");

module.exports = function (req, res) {
    const { id } = req.params;
    const { name } = req.body;

    Todo.updateOne({ _id: id }, { $set: { name: name } })
        .then(result => {
            res.json({
                success: result.modifiedCount,
            });
        })
        .catch(res.end);
};
