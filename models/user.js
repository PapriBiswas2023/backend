const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"Username is required"],
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true,"Password is required"]
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        lowercase: true,
        unique: true

    }
    
});

module.exports = mongoose.model('User', userSchema);