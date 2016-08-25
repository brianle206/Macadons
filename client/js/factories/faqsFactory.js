angular.module('myApp');
myModule.factory('faqsFactory', function($http){
	var factory = {};

	// retrieve all faqs
	factory.getAllFaqs = function(callback){
		$http.get('/getFaqs').success(function(data){
			callback(data);
		})
	}

	return factory
})