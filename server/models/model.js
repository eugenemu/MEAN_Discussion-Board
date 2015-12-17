var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

//schemas go here
var UserSchema = new mongoose.Schema({
	name: String,
	topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})
//create model
mongoose.model('User', UserSchema);

var TopicSchema = new mongoose.Schema({
	category: String,
	topic: String,
	description: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
})
mongoose.model('Topic', TopicSchema);
TopicSchema.plugin(deepPopulate);

var PostSchema = new mongoose.Schema({
	post: String,
	likes: Number,
	dislikes: Number,
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	_user: {type: Schema.Types.ObjectId, ref:'User'},
	_topic: {type: Schema.Types.ObjectId, ref: 'Topic'}
})
mongoose.model('Post', PostSchema);

var CommentSchema = new mongoose.Schema({
	comment: String,
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	_user: {type: Schema.Types.ObjectId, ref: 'User'}
})
mongoose.model('Comment', CommentSchema);