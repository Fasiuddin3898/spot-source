// backend/routes/businesses.js
const express = require('express');
const router = express.Router();

// Temporary route - you can expand this later
router.get('/', (req, res) => {
  res.json({ message: 'Businesses route is working' });
});

module.exports = router;