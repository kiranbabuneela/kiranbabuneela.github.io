// create the module and name it HareRamApp
var hareRamApp = angular.module('hareRamApp', [ 'ngRoute' ]);

hareRamApp.config(function($routeProvider) {
	$routeProvider

	// route for default context
	.when('/', {
		templateUrl : 'home.html',
		controller : 'mainController'
	})

	// route for the home page
	.when('/home', {
		templateUrl : 'home.html',
		controller : 'mainController'
	})
	// route for the residents page
	.when('/residents', {
		templateUrl : 'pages/residents/residents.html',
		controller : 'mainController'
	})
	// route for the gallery page
	.when('/events', {
		templateUrl : 'gallery.html',
		controller : 'galleryController'
	})
	// route for the funds page
	.when('/funds', {
		templateUrl : 'funds.html',
		controller : 'contactController'
	})
	// route for the funds page
	.when('/donate', {
		templateUrl : 'funds.html',
		controller : 'contactController'
	})
	// route for the contact page
	.when('/contact', {
		templateUrl : 'contact.html',
		controller : 'contactController'
	});
});

// create the controller and inject Angular's $scope
hareRamApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'HareRam';
});

hareRamApp.controller('contactController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

hareRamApp.controller('galleryController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});