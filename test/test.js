var assert = require('assert');
var request = require('supertest');

function isRunning() {
  app.get('/isRunning', (req, res) => {
    res.send('Running');
  });
}

describe('testing server running', function() {

  var server;
  beforeEach(function () {
    server = require('.././app');
  });
  afterEach(function () {
    server.close();
  });

  it('Should return a message with the content "running" if the api is up.', function(done) {
    request(server)
    .get('/isrunning')
    .expect("Running", done);
  });
});
