let mongoose = require('mongoose');
let commentSchema = new mongoose.Schema({
    postedBy: {
        type: String,
        default: 'Anonymous'
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    commentId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

let Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
