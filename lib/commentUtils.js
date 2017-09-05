const mongoose = require('mongoose');
const Comment = require('../models/Comment');

const dbName = process.env.dbName || 'mongodb://127.0.0.1/test';

module.exports = {
    addComment: (req, res) => {
        mongoose.connect(dbName);
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            const comment = new Comment({
                title: req.body.title,
                subttitle: req.body.subttitle,
                postedBy: req.body.postedBy,
                imgPath: req.body.imgPath,
                content: req.body.content,
                commentId: req.body.commentId,
                postId: req.body.postId
            });

            comment.save((err, thor) => {
                if (err) return console.error(err);
                db.close();
                res.sendStatus(200);
                console.dir(comment);
            });
        });
    },

    getComments: (req, res) => {
        mongoose.connect(dbName);
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            Comment.find({}, (err, results) => {
                if (err) return console.error(err);
                db.close();
                res.status(200).send(results);
                console.dir(results);
            });
        });
    },

    getComment: (req, res) => {
        mongoose.connect(dbName);
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            Comment.find({
                '_id': req.params.commentId
            }, (err, results) => {
                if (err) return console.error(err);
                db.close();
                res.status(200).send(results);
                console.dir(results);
            });
        });
    }
};
