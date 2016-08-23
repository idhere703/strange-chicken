let mongoose = require('mongoose');
let organizationSchema = new mongoose.Schema({
  id: Number,
  address: {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
  },
  orgType: String,
  rating: Number,
  employees: [Number]
});
let Organization = new mongoose.model('Organization', organizationSchema);
module.exports = Organization;
