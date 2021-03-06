let mongoose = require('mongoose');
let User = require('../models/User');
const dbName = process.env.dbName || 'mongodb://127.0.0.1/test';

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
      User.find({
        '_id': req.params.userId
      }, (err, results) => {
        if (err) return console.error(err);
        db.close();
        res.status(200).send(results);
        console.dir(results);
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
