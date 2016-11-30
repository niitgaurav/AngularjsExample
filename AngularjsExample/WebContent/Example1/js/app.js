var app=angular.module('myApp',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	
	.when('/',{
		templateUrl:'Example1/view/blog.html'
		
	})
	
	.when('/friend',{
		templateUrl:'Example/view/friend.html'
		
	})
	
	.when('/job',{
		templateUrl:'Example1/view/job.html'
		
	})
	
	.otherwise({redirectTo:'/'});
	
});





















