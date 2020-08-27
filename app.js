var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require("mongoose");
var app = express();
var todoController = require("./api/controllers/todoController");
var port = process.env.PORT || 3000;
var config = require('./config');
var setupController = require("./api/controller/setupController");
app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: true }));
app.use(morgan('dev'));
app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString());

setupController(app);
todoController(app);
app.get('/', function (req, res) {
    res.render("index");
});
app.listen(port, function () {
    console.log("app listening on port:" + port);

});

