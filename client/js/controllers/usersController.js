angular.module('myApp');
myApp.controller('usersController', function ($scope, $location, userFactory, $routeParams) {

	userFactory.getUser($routeParams, function(data) {
		$scope.user = data;
		console.log(data);
	});

});