var Todos = require("../model/todomodel");
module.exports = function (app) {
    app.get("/api/setupToDos", function (req, res) {
        var seedToDos = [{
            text: "Hoc node.js",
            isDone
                : false
        },
        {
            text: "Hoc angular js",
            isDone: false
        },
        {
            text: "1 ung dung hoan chinh",
            isDone: false
        }];
        Todos.create(seedToDos, function (err, rs) {
            res.send(rs);
        });
    });
}