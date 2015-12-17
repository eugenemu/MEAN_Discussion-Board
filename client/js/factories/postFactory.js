angular.module('myApp');
myApp.factory('postFactory', function($http) {

	var factory = {};

	factory.showPosts = function(info, callback) {
		$http.get('/showPosts/' + info.id).success(function(data) {
			callback(data);
		})
	}

	factory.addPost = function(info, callback) {
		$http.post('/addPost/' + info.id, info).success(function(data) {
			callback(data);
		})
	}

	factory.like = function(info, callback) {
		$http.post('/likePost', info).success(function(data) {
			callback(data);
		})
	}

	factory.dislike = function(info, callback) {
		$http.post('/dislikePost', info).success(function(data) {
			callback(data);
		})
	}

	return factory;
});