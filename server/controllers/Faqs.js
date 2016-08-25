var mongoose = require('mongoose');
var Faqs = mongoose.model('faqs');

module.exports = {

	getAllFaqs : function(req, res){
		Faqs.find({}, function(err, faqs){
			if(err){
				res.json(err)
			}
			else{
				res.json(faqs)
			}
		})
	}
}