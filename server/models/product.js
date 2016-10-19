var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
	name : {type: String},
	description : {type: String},
	price : {type: Number},
	image : {type: String}

}, {timestamps: true});

mongoose.model('products', ProductSchema);