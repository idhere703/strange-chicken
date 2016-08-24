let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({

    _id: Schema.Types.ObjectId,
    organization: {
        name: {
            type: String
        },
        orgId: {
            type: Number
        }
    },
    fullName: String,
    professionalTitle: String,
    allowSearch: Boolean,
    updated: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});
let User = mongoose.model('User', userSchema);
module.exports = User;
