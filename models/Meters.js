const mongoose = require('mongoose');

const metersSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the 'User' model
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  measurementUnit: {
    type: String,
    required: true
  },
  assignedTo: {
    type: {
      type: String,
      enum: ['assets', 'location'],
      required: true
    },
    reference: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'assignedTo'
    },
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  
});

const Meters = mongoose.model('Meters', metersSchema);

module.exports = Meters;