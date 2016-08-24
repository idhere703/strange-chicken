let assert = require('assert');
let request = require('supertest');

function isRunning() {
  app.get('/isRunning', (req, res) => {
    res.send('Running');
  });
}

// Should let me know if the server is running.
// Always document your tests.
describe('testing server running', function() {
  let server;
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
