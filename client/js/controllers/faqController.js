angular.module("myApp");
myModule.controller("faqController", function($scope,$window, faqsFactory){

	faqsFactory.getAllFaqs(function(data){
		$scope.faqs = data;
	})

	$scope.addQ = function(){
		if(!$scope.faq.question || !$scope.faq.answer){
			$window.alert("Question or Answer cannot be blank");
			$scope.faq = {}
		}
		else {
			faqsFactory.addFaq($scope.faq, function(data){
			$scope.faqs = data;
			$scope.faq = {}
		})
		}


	}
})