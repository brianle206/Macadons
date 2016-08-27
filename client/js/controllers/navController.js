angular.module("myApp");
myModule.controller("navController", function($scope, userFactory){

	// get current user
	$scope.user = userFactory.getUser()

})