var users = require('../controllers/usersController.js');
var topics = require('../controllers/topicsController.js');
var posts = require('../controllers/postsController.js');
var comments = require('../controllers/commentsController.js');

module.exports = function(app) {

	app.get('/', function(req, res) {
		users.index(req, res);
	})
	//Users Routes
	app.post('/checkUser', function(req, res) {
		users.getUser(req, res);
	})

	app.post('/addUser', function(req, res) {
		users.add(req, res);
	})

	app.post('/getUser', function(req, res) {
		users.get(req, res);
	})

	//Topics Routes
	app.get('/showTopics', function(req, res) {
		topics.show(req, res);
	})

	app.post('/addTopic', function(req, res) {
		topics.add(req, res);
	})

	app.post('/getTopic', function(req, res) {
		topics.getTopic(req, res);
	})

	//Posts Routes
	app.get('/showPosts/:topicId', function(req, res) {
		posts.show(req, res);
	})

	app.post('/addPost/:topicId', function(req, res) {
		posts.add(req, res);
	})

	app.post('/likePost', function(req, res) {
		posts.like(req, res);
	})

	app.post('/dislikePost', function(req, res) {
		posts.dislike(req, res);
	})

	//Comments Routes
	app.get('/showComments/:topicId', function(req, res) {
		comments.show(req, res);
	})

	app.post('/addComment', function(req, res) {
		comments.add(req, res);
	})

}