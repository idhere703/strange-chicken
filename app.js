let express = require('express');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let app = express();
let userUtils = require('./lib/userUtils');
let orgUtils = require('./lib/orgUtils');
let postUtils = require('./lib/postUtils');
let bodyParser = require('body-parser');
let port = process.env.PORT ? process.env.PORT : 8100;
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({
      username: username
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'Incorrect username.'
        });
      }
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }
      return done(null, user);
    });
  }
));

app.get('/isRunning', (req, res) => {
  res.send('Running');
});

app.post('/login', (req, res) => passport.authenticate('local', {
  successRedirect: '/isRunning',
  failureRedirect: '/login',
})(req, res));

app.post('/addPost', passport.authenticate('local'), (req, res) => {
  postUtils.addPost(req, res);
});

app.get('/getPosts', passport.authenticate('local'), (req, res) => {
  postUtils.getPosts(req, res);
});

app.get('/getPost/:postId', passport.authenticate('local'), (req, res) => {
  postUtils.getPosts(req, res);
});

app.post('/updatePost', passport.authenticate('local'), (req, res) => {
  postUtils.updatePost(req, res);
});

app.post('/addUser', (req, res) => {
  userUtils.addUser(req, res);
});

app.post('/removeUser', passport.authenticate('local'), (req, res) => {
  userUtils.removeUser(req, res);
});

app.get('/getUser/:userId', passport.authenticate('local'), (req, res) => {
  userUtils.getUser(req, res);
});

app.get('/getUsers',
  // passport.authenticate('local'), 
  (req, res) => {
    userUtils.getUser(req, res);
  });

app.post('/addOrg', passport.authenticate('local'), (req, res) => {
  orgUtils.addOrg(req, res);
});


let server = app.listen(port, () => {
  let port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
