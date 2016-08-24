let mongoose = require('mongoose');
let Organization = require('../models/Organization');

module.exports = {
  addOrg: (req, res) => {
    mongoose.connect('mongodb://localhost/test');
    let db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', () => {
      let org = new Organization({
        address: {
            address1: req.body.address.address1,
            address2: req.body.address.address2,
            city: req.body.address.city,
            state: req.body.address.state,
            postalCode: req.body.address.postalCode
        },
        orgType: req.body.orgType,
        rating: req.body.rating,
        employees: req.body.employees
      });

      org.save((err, thor) => {
        if (err) return console.error(err);
        db.close();
        res.sendStatus(200);
        console.dir(org);
      });
    });
  }
};
