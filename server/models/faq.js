var mongoose = require("mongoose");

var FaqsSchema = new mongoose.Schema({
	question : {type: String},
	answer : {type: String},
	display : {type: Boolean}

}, {timestamps: true});

mongoose.model('faqs', FaqsSchema);