const mongoose = require('mongoose');
const DislikeSchema = new mongoose.Schema({
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

const Dislike = mongoose.model('Dislike', DislikeSchema);
module.exports = Dislike;
