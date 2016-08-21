let mongoose = require('mongoose');
let User = require('../models/User');

module.exports = {
  addUser: (req, res) => {
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
  }
};
