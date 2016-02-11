angular.module('myApp');
myApp.controller('dashboardController', function ($scope, $location, userFactory, topicFactory) {

	$scope.user = userFactory.user();
	console.log($scope.user);

	topicFactory.showTopics(function(data) {
		$scope.topics = data;
	});

	$scope.addTopic = function() {
		$scope.newTopic.user = $scope.user;
		topicFactory.addTopic($scope.newTopic, function(data) {
			$scope.topics = data;
			$scope.newTopic = {};
		})
	}

	$scope.logout = function() {
		userFactory.logout();
		$location.url('/'); 
	}

})