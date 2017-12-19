const mongoose = require('mongoose');
const likeSchema = new mongoose.Schema({
    addedBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    postId: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;
