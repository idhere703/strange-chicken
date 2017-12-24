const mongoose = require('mongoose');
const Dislike = require('../models/Dislike');

const dbName = process.env.dbName || 'mongodb://127.0.0.1/test';

module.exports = {
    // Add all of the dislike. You'll be able to add all of the dislikes you want.
    addDislike: (req, res) => {
        mongoose.connect(dbName);
        let db = mongoose.connection;
        db.on('error', console.error);
        db.once('open', () => {
            const dislike = new Dislike({
                addedBy: req.body.addedBy,
                postId: req.body.postId
            });

            dislike.save((err, thor) => {
                if (err) return console.error(err);
                db.close();
                res.sendStatus(200);
                console.dir(dislike);
            });
        });
    },
};
