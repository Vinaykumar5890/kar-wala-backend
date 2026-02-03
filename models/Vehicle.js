const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  title: String,
  brand: String,
  model: String,
  year: Number,
  fuelType: String,
  transmission: String,
  kmDriven: Number,
  price: Number,

  city: String,
  images: [String],

  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  status: {
    type: String,
    enum: ['pending', 'approved', 'sold'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', VehicleSchema);
