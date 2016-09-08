console.log("IN SERVER/CONFIG/ROUTES.JS FILE");

var faqs = require("../controllers/faqs.js");
var users = require('../controllers/users.js');
var products = require('../controllers/products.js');

module.exports = function(app){
	
	// Admin login
	app.post('/login', function(req, res){
		users.logUserIn(req, res);
	})

	// Admin Signup
	app.post('/signup', function(req, res){
		users.userSignUp(req, res)
	})

	// get all admin users
	app.get('/getAllUsers', function(req, res){
		users.getAllUsers(req, res);
	})

	// get all faqs
	app.get('/getFaqs', function(req, res){
		faqs.getAllFaqs(req, res);
	})

	// add a faq
	app.post('/addFaq', function(req, res){
		faqs.addFaq(req, res);
	})

	// Adding a product
	app.post("/addProduct", function(req, res){
		products.addProduct(req, res);
	})

	// get all products
	app.get('/getProducts', function(req, res){
		products.getProducts(req,res);
	})

}