let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
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
    archived: {
        type: Boolean,
        default: false
    }
});
let User = mongoose.model('User', userSchema);
module.exports = User;
