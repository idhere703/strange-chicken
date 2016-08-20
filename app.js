let express = require('express');
let app = express();
let User = require('./models/User');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let port = process.env.PORT ? process.env.PORT : 3000;

app.use( bodyParser.json() ); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

app.get('/isRunning', (req, res) => {
  res.send('Running');
});

app.post('/addUser', (req, res) => {
  mongoose.connect('mongodb://localhost/test');
  let db = mongoose.connection;
  db.on('error', console.error);
  db.once('open', () => {
    let cindy = new User({
      organization: {
          name: req.body.orgName || "",
          orgId: req.body.orgId || 0
      },
      fullName: req.body.fullEmpName || "",
      professionalTitle: req.body.empTitle || "",
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
