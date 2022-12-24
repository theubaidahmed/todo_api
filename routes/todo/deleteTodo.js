const Todo = require("../../schemas/Todo");

module.exports = function (req, res) {
    // const {categoryId} = req.params;
    const { id } = req.params;
    console.log(id);
    Todo.deleteOne({ _id: id })
        .then(result => {
            if (!result.deletedCount) res.json({ success: 0, error: "something went wrong" });
            res.json({ success: 1 });
        })
        .catch(err => res.end(err));
    // const result = Todo.find({ _id: "63a4257534aa6aff377cc689" });
    // console.log(result);
    // res.end();
};
