const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    distance:{
        type: String,
        required: true
    },
    photo:{
        type:[String],
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    rooms:{
        type: [String]
    },
    price:{
        type: Number,
        required: true
    },
    featured:{
        type: Boolean,
        default: false
    }
    
},{timestamps: true});

module.exports = mongoose.model('Hotel', hotelSchema);
//export const Hotel = mongoose.model('Hotel', hotelSchema);