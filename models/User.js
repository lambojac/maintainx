const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    roleId: { 
        type: mongoose.Schema.Types.ObjectId,
        //required: true,
        ref: "Roles" 
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    authToken: {
        token: String,
        expiry: Date,
    },
    loginPassword: {
        type: String,
        required: true,
        minLength: [6, 'Password must be at least 6 characters long']
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        //required: true,
    },
    profileImage: {
        type: String,
        default: "avatar"
    },
},

{ timestamps: true}
)

module.exports = mongoose.model("User", userSchema)