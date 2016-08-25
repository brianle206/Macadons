console.log("IN SERVER/CONFIG/ROUTES.JS FILE");

var faqs = require("../controllers/Faqs.js");

module.exports = function(app){
	

	// get all faqs
	app.get('/getFaqs', function(req, res){
		faqs.getAllFaqs(req, res);
	})
}