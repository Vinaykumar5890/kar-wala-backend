const express = require('express');
const Vehicle = require('../models/Vehicle');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

const router = express.Router();

/* Admin approves vehicle */
router.put('/approve/:id', auth, role('admin'), async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  vehicle.status = 'approved';
  await vehicle.save();
  res.json({ message: 'Vehicle approved' });
});

module.exports = router;
