var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/client'));



app.listen(8000, function(){
	console.log("Working on port 8000");
})

