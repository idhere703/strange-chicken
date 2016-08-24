let mongoose = require('mongoose');
let organizationSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    address: {
        address1: String,
        address2: String,
        city: String,
        state: String,
        postalCode: String,
    },
    orgType: String,
    rating: Number,
    employees: [Number]
});
let Organization = new mongoose.model('Organization', organizationSchema);
module.exports = Organization;
