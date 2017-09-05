const mongoose = require('mongoose');
const Post = require('../models/Post');

const dbName = process.env.dbName || 'mongodb://127.0.0.1/test';

module.exports = {
    addPost: (req, res) => {
        mongoose.connect(dbName);
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            const post = new Post({
                title: req.body.title,
                subttitle: req.body.subttitle,
                postedBy: req.body.postedBy,
                imgPath: req.body.imgPath,
                content: req.body.content,
                postId: req.body.postId
            });

            post.save((err, thor) => {
                if (err) return console.error(err);
                db.close();
                res.sendStatus(200);
                console.dir(post);
            });
        });
    },

    updatePost: (req, res) => {
        mongoose.connect(dbName);
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            Post.update({
                _id: req.body.postId
            }, req.body.postInfo, (err, numberAffected, rawResponse) => {
                if (err) return console.error(err);
                db.close();
                console.log(rawResponse, numberAffected, err);
                res.status(200).send(rawResponse);
            });
        });
    },

    getPosts: (req, res) => {
        mongoose.connect(dbName);
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            Post.find({}, (err, results) => {
                if (err) return console.error(err);
                db.close();
                res.status(200).send(results);
                console.dir(results);
            });
        });
    },

    getPost: (req, res) => {
        mongoose.connect(dbName);
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            Post.find({
                '_id': req.params.postId
            }, (err, results) => {
                if (err) return console.error(err);
                db.close();
                res.status(200).send(results);
                console.dir(results);
            });
        });
    }
};
