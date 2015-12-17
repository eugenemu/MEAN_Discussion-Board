angular.module('myApp');
myApp.controller('topicsController', function ($scope, $location, userFactory, commentFactory, topicFactory, postFactory, $routeParams) {

	var user = userFactory.getUser();

	topicFactory.getTopic($routeParams, function(data) {
		$scope.topicInfo = data;
	})

	postFactory.showPosts($routeParams, function(data) {
		$scope.posts = data;
	})

	commentFactory.showComments($routeParams, function(data) {
		$scope.topic = data;
	})


	$scope.addPost = function() {
		$scope.newPost.id = $routeParams.id;
		$scope.newPost.user = user._id;
		postFactory.addPost($scope.newPost, function(data) {
			$scope.posts = data;
			$scope.newPost = {};
		});
	}

	$scope.addComment = function(postId, newComment) {
		var info = {topic: $routeParams.id, post: postId, comment: newComment, user: user._id};
		commentFactory.addComment(info, function(data) {
			$scope.posts = data;
			$scope.newComment = {};
		})
	}

	$scope.like = function(postId, topicId, authorId) {
		if (authorId != user._id) {
			var info = {topicId: topicId,postId: postId};
			postFactory.like(info, function(data) {
				$scope.posts = data;
			})
		}
		
	}

	$scope.dislike = function(postId, topicId, authorId) {
		if (authorId != user._id) {
			var info = {topicId: topicId, postId: postId};
			postFactory.dislike(info, function(data) {
				$scope.posts = data;
			})
		}
	}

})