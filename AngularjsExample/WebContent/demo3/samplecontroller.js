var app=angular.module('personApp',[])
app.controller('PersonController',function($scope){
	$scope.persons=[{id:1,name:'Divyesh',email:'dh@xyz.com'},
	                {id:2,name:'Rupesh',email:'rm@abc.com'},
	                {id:3,name:'Gaurav',email:'gds@abc.com'}]
})