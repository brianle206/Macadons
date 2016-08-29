console.log("IN SERVER/CONFIG/ROUTES.JS FILE");

var faqs = require("../controllers/faqs.js");
var users = require('../controllers/users.js');

module.exports = function(app){
	
	// Admin login
	app.post('/login', function(req, res){
		users.logUserIn(req, res);
	})

	// Admin Signup
	app.post('/signup', function(req, res){
		users.userSignUp(req, res)
	})

	// get all faqs
	app.get('/getFaqs', function(req, res){
		faqs.getAllFaqs(req, res);
	})

	// add a faq
	app.post('/addFaq', function(req, res){
		faqs.addFaq(req, res);
	})


}