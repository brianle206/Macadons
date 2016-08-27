angular.module("myApp");
myModule.controller("userController", function($scope,$window, $location, userFactory){

	// get current user
	$scope.user = userFactory.getUser();

	$scope.login = function(){
		userFactory.login($scope.admin, function(data){
			if(data == undefined){
				$window.alert("invalid login")
				$scope.admin = {}
			}
			else {

				$location.url('/')
				$window.location.reload()

			}
		})
	}

	$scope.signup = function(){
		userFactory.signup($scope.userAd, function(data){
			if('alert' in data){
				var name = 'alert';
				$window.alert(data[name])
				$scope.userAd = {}
				$location.url('/admin')
			}
			else{
				$location.url('/')
			}
		})
	}

	$scope.logout = function(){
		userFactory.logout()
		$location.url('/')
		$window.location.reload();
	}

})