const express = require('express');
const Order = require('../models/Order');
const Vehicle = require('../models/Vehicle');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

const router = express.Router();

/* Buyer books vehicle */
router.post('/:vehicleId', auth, role('buyer'), async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.vehicleId);
  if (!vehicle || vehicle.status !== 'approved')
    return res.status(400).json({ message: 'Vehicle not available' });

  const order = await Order.create({
    vehicle: vehicle._id,
    buyer: req.user.id,
    amount: vehicle.price
  });

  vehicle.status = 'sold';
  await vehicle.save();

  res.json(order);
});

module.exports = router;
