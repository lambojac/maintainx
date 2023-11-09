const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({

    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    assets: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assets'
    },
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

},
{ timestamps: true}

);

const Vendors = mongoose.model('Vendors', vendorSchema);

module.exports = Vendors