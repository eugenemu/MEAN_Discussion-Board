angular.module('myApp');
myApp.factory('topicFactory', function ($http) {

	var factory = {};

	factory.showTopics = function(callback)	{
		$http.get('/showTopics').success(function(data) {
			callback(data);
		});
	}

	factory.addTopic = function(info, callback) {
		$http.post('/addTopic', info).success(function(data) {
			callback(data);
		});
	}

	factory.getTopic = function(info, callback) {
		$http.post('/getTopic', info).success(function(data) {
			callback(data);
		})
	}

	return factory;
})