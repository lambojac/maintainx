const mongoose = require('mongoose')

const roleSchema = mongoose.Schema({
    Manager: {
        type: String,
    },
    Admin: {
        type: String
    },
    Editor: {
        type: String
    },
},
{ timestamps: true }
)

module.exports = mongoose.model("Role", roleSchema)
