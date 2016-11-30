var app=angular.module('myApp',['ngRoute'])
app.config(function($routeProvider){
	console.log('Entering app configuration')

	$routeProvider
	.when('/listOfPersons',{
		controller:'PersonController',
		templateUrl:'pages/listOfPersons.html'
	})
	.when('/',{templateUrl:'pages/home.html'})
})














