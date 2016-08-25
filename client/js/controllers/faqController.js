angular.module("myApp");
myModule.controller("faqController", function($scope, faqsFactory){

	faqsFactory.getAllFaqs(function(data){
		$scope.faqs = data;
		console.log("ALL THE FAQS: ", $scope.faqs)
	})

	$scope.submitQ = function(faqs){
		console.log(faqs.question)
	}
})