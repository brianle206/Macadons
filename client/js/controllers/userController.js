angular.module("myApp");
myModule.controller("userController", function($scope,$window, $location, userFactory){

	$scope.user = userFactory.getUser();

	$scope.login = function(){
		userFactory.login($scope.admin, function(data){
			if(data == undefined){
				$window.alert("invalid login")
				$scope.admin = {}
			}
			else {
				$location.url('/')
			}
		})
	}

	$scope.signup = function(){
		console.log($scope.userAd)
		userFactory.signup($scope.userAd, function(data){
			if('alert' in data){
				var name = 'alert';
				$scope.alert = data[name]
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
	}

})