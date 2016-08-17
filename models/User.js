var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    organization: {
        name: { type: String },
        orgId: { type: Number}
    },
    fullName: String,
    professionalTitle: String,
    allowSearch: Boolean,
    updated: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
});
var User = mongoose.model('User', userSchema);
module.exports = User;
