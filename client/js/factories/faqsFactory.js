angular.module('myApp');
myModule.factory('faqsFactory', function($http){
	var factory = {};

	// retrieve all faqs
	factory.getAllFaqs = function(callback){
		$http.get('/getFaqs').success(function(data){
			callback(data);
		})
	}

	factory.addFaq = function(info, callback){
		$http.post('/addFaq', info).success(function(output){
			callback(output)
		})
	}

	return factory
})