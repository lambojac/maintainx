const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  vendors: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendors'
  },
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  teamInCharge: {
    type: String,
    required: true
  },
  files: {
    type: String,
    required: true
  },

}
{ timestamps: true}
);

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
