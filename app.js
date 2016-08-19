let express = require('express');
let app = express();
let User = require('./models/User');
let mongoose = require('mongoose');
let port = process.env.PORT ? process.env.PORT : 3000;

app.get('/isRunning', (req, res) => {
  res.send('Running');
});

app.post('/addUser', (req, res) => {
  mongoose.connect('mongodb://localhost/test');

  let db = mongoose.connection;

  db.on('error', console.error);
  db.once('open', () => {
    // Create your schemas and models here.
    let cindy = new User({
      organization: {
          name: 'Cindys Somethings',
          orgId: 1
      },
      fullName: 'Cindy Some',
      professionalTitle: "CEO",
      updated: new Date()
    });

    cindy.save((err, thor) => {
      if (err) return console.error(err);
      db.close();
      res.sendStatus(200);
      console.dir(cindy);
    });
  });
});


let server = app.listen(port, () => {
  let port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
