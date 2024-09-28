const mongoose = require('mongoose');

const locationVolunteer = new mongoose.Schema({
    name: { type: String, required: true },
    profile: { type: String }, 
    email: { type: String, required: true },
    address:{ type: String, required: true },
    phone:{type: String},
    education: { type: String, required: true },
    image: { type: String }, 
    description: { type: String, required: true },
    certiName: { type: String },
    certiDes: { type: String },
},{timestamps:true});

const Volunteer = mongoose.model('Volunteer', locationVolunteer);

module.exports =Volunteer;
