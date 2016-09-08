var mongoose = require('mongoose');
var Product = mongoose.model('products');

module.exports = {

	addProduct: function(req, res){
		console.log("IN SERVER ADDING PRODUCT", req.body.flavor, req.body.description, req.body.price, req.body.saveLocation)
		new_Product = new Product({
			name : req.body.flavor,
			description : req.body.description,
			price : req.body.price,
			image : req.body.saveLocation,
		})
		new_Product.save(function(err,product){
			if(err){
				console.log(err)
			}
			else{
				res.json(product)
			}
		})
	},

	getProducts: function(req,res){
		Product.find({}, function(err, products){
			if(err){
				res.json(err)
			}
			else{
				res.json(products)
			}
		})
	}
}