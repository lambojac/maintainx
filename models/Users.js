const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    teams: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teams',
    },   
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please insert a mail"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email",
        ],
    },
    authToken: {
        token: String,
        expiry: Date,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: String,
    },
    lastVisit: {
        type: Date
    }
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;