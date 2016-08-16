var express = require('express');
var app = express();

app.get('/isRunning', (req, res) => {
  res.send('Running');
});

app.post('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT);
