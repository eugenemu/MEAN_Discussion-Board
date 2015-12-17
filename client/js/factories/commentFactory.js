angular.module('myApp');
myApp.factory('commentFactory', function($http) {
	var factory = {};

	factory.showComments = function(info, callback) {
		$http.get('/showComments/' + info.id).success(function(data) {
			callback(data);
		})
	}

	factory.addComment = function(info, callback) {
		$http.post('/addComment', info).success(function(data) {
			callback(data);
		})
	}

	return factory;
})