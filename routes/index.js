const Todo = require("../schemas/Todo");

module.exports = async function (req, res) {
    try {
        const todos = await Todo.find();
        res.json({
            success: 1,
            todos,
        });
    } catch (e) {
        res.status(500).end(e);
    }
};
