const Todo = require("../../schemas/Todo");

module.exports = function (req, res) {
    const { name } = req.query;
    if (!name) res.end("Todo Name is required");

    const todo = new Todo({
        name,
    });
    try {
        todo.save();

        res.json({
            success: 1,
        });
    } catch (e) {
        res.json({
            success: 0,
            error: "something went wrong",
            e,
        });
    }
};
