// app.js (main application)

const express = require('express');
const app = express();
const port = 3000;

const adminRoutes = require('./routes/admin'); // Import admin router
const shopRoutes = require('./routes/shop');   // Import shop router

app.use('/admin', adminRoutes);  // Use the admin router for /admin routes
app.use('/shop', shopRoutes);    // Use the shop router for /shop routes

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
