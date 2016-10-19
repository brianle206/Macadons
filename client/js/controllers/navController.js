angular.module("myApp");
myModule.controller("navController", function($scope, userFactory, $window){

	// get current user
	$scope.user = userFactory.getUser()

	$scope.logout = function(){
		userFactory.logout()
		// $location.url('/')
		$window.location.reload();
	}

})