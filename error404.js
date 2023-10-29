// admin.js (admin router)

const express = require('express');
const router = express.Router();

// Define admin routes
router.get('/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});

router.get('/products', (req, res) => {
  res.send('Admin Products');
});

module.exports = router;
