let mongoose = require('mongoose');
let Post = require('../models/Post');

module.exports = {
    addPost: (req, res) => {
        mongoose.connect('mongodb://localhost/test');
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            const post = new Post({
                title: req.body.title,
                subttitle: req.body.subttitle,
                postedBy: req.body.postedBy,
                imgPath: req.body.imgPath,
                content: req.body.content,
                postId: req.bodypostId
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
        mongoose.connect('mongodb://localhost/test');
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            // TODO: Write update.
        });
    },

    getPosts: (req, res) => {
        mongoose.connect('mongodb://localhost/test');
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
    }
};
