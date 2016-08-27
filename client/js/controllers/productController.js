angular.module("myApp");
myModule.controller("productController", function($scope, userFactory){


	$scope.user = userFactory.getUser()

})