const express = require('express');
const Vehicle = require('../models/Vehicle');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

const router = express.Router();

/* Seller adds vehicle */
router.post('/', auth, role('seller'), async (req, res) => {
  const vehicle = await Vehicle.create({
    ...req.body,
    seller: req.user.id
  });
  res.json(vehicle);
});

/* Public – get approved vehicles */
router.get('/', async (req, res) => {
  const vehicles = await Vehicle.find({ status: 'approved' });
  res.json(vehicles);
});

/* Single vehicle */
router.get('/:id', async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  res.json(vehicle);
});

module.exports = router;
