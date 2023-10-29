// shop.js (shop router)

const express = require('express');
const router = express.Router();

// Define shop routes
router.get('/products', (req, res) => {
  res.send('Shop Products');
});

router.get('/cart', (req, res) => {
  res.send('Shopping Cart');
});

module.exports = router;
