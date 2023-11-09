const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    teams: {
        teamName: {
            type: String,
            unique: true
        },
        teamDesc: {
            type: String,
            default: ""
        },
    },
    fullName: {
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        required: true
    },
    lastVisit: {
        type: Date
    }
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;