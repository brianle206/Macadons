var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./node_modules")));

app.use(express.static(path.join(__dirname, "./client")));


require("./server/config/mongoose.js");

require("./server/config/routes.js")(app);



app.listen(8000, function(){
	console.log("Working on port 8000");
})

