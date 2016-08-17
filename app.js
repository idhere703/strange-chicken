var express = require('express');
var app = express();
var User = require('./models/User');
var mongoose = require('mongoose');

app.get('/isRunning', (req, res) => {
  res.send('Running');
});

app.get('/addUser', (req, res) => {
  // res.send('Hello World!');
  mongoose.connect('mongodb://localhost/test');

  var db = mongoose.connection;

  db.on('error', console.error);
  db.once('open', function() {
    // Create your schemas and models here.
    var cindy = new User({
      organization: {
          name: 'Cindys Somethings',
          orgId: 1
      },
      fullName: 'Cindy Some',
      professionalTitle: "CEO",
      updated: new Date()
    });

    cindy.save(function(err, thor) {
      if (err) return console.error(err);
      console.dir(cindy);
    });
  });
});

//app.listen(process.env.PORT);
app.listen(3000);
