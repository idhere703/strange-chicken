const express = require('express');
const app = express();
const userUtils = require('./lib/userUtils');
const postUtils = require('./lib/postUtils');
const commentUtils = require('./lib/commentUtils');
const likeUtils = require('./lib/likeUtils');
const dislikeUtils = require('./lib/dislikeUtils');
const bodyParser = require('body-parser');
const port = process.env.PORT ? process.env.PORT : 8100;
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/posts', (req, res) => {
  postUtils.getPosts(req, res);
}).post('/posts', (req, res) => {
  postUtils.addPost(req, res);
});

app.get('/posts/:postId', (req, res) => {
  postUtils.getPosts(req, res);
}).post('/posts/update', (req, res) => {
  postUtils.updatePost(req, res);
});

app.post('/addUser', (req, res) => {
  userUtils.addUser(req, res);
});

app.post('/removeUser', (req, res) => {
  userUtils.removeUser(req, res);
});

app.get('/getUser/:userId', (req, res) => {
  userUtils.getUser(req, res);
});

app.get('/getUsers', (req, res) => {
  userUtils.getUsers(req, res);
});

app.get('/getComment/:commentId', (req, res) => {
  commentUtils.getComment(req, res);
});

app.get('/getComments', (req, res) => {
  commentUtils.getComments(req, res);
});

app.post('/addComment', (req, res) => {
  commentUtils.addComment(req, res);
});

app.post('/addLike', (req, res) => {
  likeUtils.addLike(req, res);
});

let server = app.listen(port, () => {
  let port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
