let mongoose = require('mongoose');
let User = require('../models/User');
const dbName = process.env.dbName || 'mongodb://localhost/test';

module.exports = {
  getUsers: (req, res) => {
    mongoose.connect(dbName);
    let db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', () => {
      User.find({}, (err, results) => {
        if (err) return console.error(err);
        db.close();
        res.status(200).send(results);
        console.dir(results);
      });
    });
  },
  getUser: (req, res) => {
    mongoose.connect(dbName);
    let db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', () => {
      Post.find({
        '_id': req.params.userId
      }, (err, results) => {
        if (err) return console.error(err);
        db.close();
        res.status(200).send(results);
        console.dir(results);
      });
    });
  },

  addUser: (req, res) => {
    mongoose.connect(dbName);
    let db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', () => {
      let user = new User({
        organization: {
          name: req.body.orgName || "",
          orgId: req.body.orgId || 0
        },
        fullName: req.body.fullEmpName || "",
        professionalTitle: req.body.empTitle || "",
        updated: new Date()
      });

      user.save((err, thor) => {
        if (err) return console.error(err);
        db.close();
        res.sendStatus(200);
        console.dir(user);
      });
    });
  },
  removeUser: (req, res) => {
    mongoose.connect(dbName);
    let db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', () => {
      User.update({
        _id: req.body.userId
      }, {
        archived: true
      }, (err, numberAffected, rawResponse) => {
        if (err) return console.error(err);
        db.close();
        console.log(rawResponse, numberAffected, err);
        res.status(200).send(rawResponse);
      });
    });
  }
};
