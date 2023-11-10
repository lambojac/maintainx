const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({

    location: {
        type: String
        //ref: 'Location'
    },
    assets: {
        type:String,
       // ref: 'Assets'
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
    },
    Parts:{
     type:String,
    }

},
{ timestamps: true}

);

const Vendors = mongoose.model('Vendors', vendorSchema);

module.exports = Vendors