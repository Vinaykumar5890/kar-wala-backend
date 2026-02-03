require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicle.routes');
const orderRoutes = require('./routes/order.routes');
const adminRoutes = require('./routes/admin.routes');
const authRoutes = require('./routes/auth.routes');
const app = express();
app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());

// --- Connect MongoDB ---
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected ✅'))
  .catch(err => console.error('MongoDB connect error:', err.message));

app.use('/vehicles', vehicleRoutes);
app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);
app.use('/admin', adminRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}`));