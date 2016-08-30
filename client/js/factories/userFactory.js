angular.module('myApp');
myModule.factory('userFactory', function($http, $sessionStorage){
	var factory = {};
	$sessionStorage.currUser;

	factory.login = function(info, callback){
		$http.post('/login', info).success(function(output){
			$sessionStorage.currUser = output
			callback(output)
		})
	}

	factory.signup = function(info, callback){
		$http.post('/signup', info).success(function(output){
			if('alert' in output){
				console.log("ERRRORROEOREO")
			}
			else{
			$sessionStorage.currUser = output
			}	
			callback(output)
		})
	}

	factory.getUser = function(){
		return $sessionStorage.currUser
	}

	factory.getAllUsers = function(callback){
		$http.get('/getAllUsers').success(function(data){
			callback(data);
		})
	}

	factory.logout = function(){
		$sessionStorage.currUser = null
	}

	return factory
})