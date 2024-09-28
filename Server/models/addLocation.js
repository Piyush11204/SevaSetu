const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone:{type: String},
    DrName:{ type: String, required: true },
    SrName:{ type: String, required: true },
    JrName:{ type: String, required: true },
    locationType: { type: String, required: true },
    station: { type: String, required: true },
    image: { type: String }, // You may store the image URL or path
    description: { type: String, required: true },
    additionalDetails: { type: String },
    rating: { type: Number, min: 1, max: 5, default: 0 } // Rating from 1 to 5
},{timestamps:true});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
