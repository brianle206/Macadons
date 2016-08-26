var myModule = angular.module("myApp", ["ngRoute", "ngStorage"]);

myModule.config(function($routeProvider){
	$routeProvider

	.when('/',{
		templateUrl: "partials/home.html",
		// controller : 'faqController'
	})
	.when('/about',{
		templateUrl: "partials/about.html"
	})
	.when('/pricing',{
		templateUrl: "partials/pricing.html"
	})
	.when('/flavors',{
		templateUrl: "partials/flavors.html"
	})
	.when('/gallery',{
		templateUrl: "partials/gallery.html"
	})
	.when('/contact',{
		templateUrl: "partials/contact.html"
	})
	.when('/faqs',{
		templateUrl: "partials/faq.html"
	})
	.when('/admin',{
		templateUrl: "partials/admin.html"
	})
	.otherwise({
		redirectTo: '/'
	})
	
})