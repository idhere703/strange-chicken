const mongoose = require('mongoose');
const Like = require('../models/Like');

const dbName = process.env.dbName || 'mongodb://127.0.0.1/test';

module.exports = {
    addLike: (req, res) => {
        mongoose.connect(dbName);
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            const like = new Like({
                addedBy: req.body.addedBy,
                postId: req.body.postId
            });

            like.save((err, thor) => {
                if (err) return console.error(err);
                db.close();
                res.sendStatus(200);
                console.dir(like);
            });
        });
    },
};
