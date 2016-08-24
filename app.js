let express = require('express');
let app = express();
let userUtils = require('./lib/userUtils');
let orgUtils = require('./lib/orgUtils');
let bodyParser = require('body-parser');
let port = process.env.PORT ? process.env.PORT : 3000;

app.use( bodyParser.json() ); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

app.get('/isRunning', (req, res) => {
  res.send('Running');
});

app.post('/addUser', (req, res) => {
  userUtils.addUser(req, res);

});

app.post('/addOrg', (req, res) => {
  orgUtils.addOrg(req, res);
});


let server = app.listen(port, () => {
  let port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
