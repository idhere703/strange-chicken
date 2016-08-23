let mongoose = require('mongoose');
let organizationSchema = new mongoose.Schema({});
let Organization = new mongoose.model('Organization', organizationSchema);
module.exports = Organization;
