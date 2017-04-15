let mongoose = require('mongoose');
let postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    subttitle: {
        type: String
    },
    postedBy: {
        type: String
    },
    postedAt: {
        type: Date,
        default: Date.now
    },
    imgPath: {
        type: String
    },
    content: {
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

let Post = mongoose.model('Post', postSchema);
module.exports = Post;
