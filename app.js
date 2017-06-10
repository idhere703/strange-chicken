let express = require('express');
let app = express();
let userUtils = require('./lib/userUtils');
let orgUtils = require('./lib/orgUtils');
let postUtils = require('./lib/postUtils');
let commentUtils = require('./lib/commentUtils');
let bodyParser = require('body-parser');
let port = process.env.PORT ? process.env.PORT : 8100;
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/isRunning', (req, res) => {
  res.send('Running');
});

app.post('/addPost', (req, res) => {
  postUtils.addPost(req, res);
});

app.get('/getPosts', (req, res) => {
  postUtils.getPosts(req, res);
});

app.get('/getPost/:postId', (req, res) => {
  postUtils.getPosts(req, res);
});

app.post('/updatePost', (req, res) => {
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

app.post('/addOrg', (req, res) => {
  orgUtils.addOrg(req, res);
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


let server = app.listen(port, () => {
  let port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
