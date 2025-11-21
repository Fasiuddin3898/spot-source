// backend/routes/creators.js
const express = require('express');
const router = express.Router();

// Temporary route - you can expand this later
router.get('/', (req, res) => {
  res.json({ message: 'Creators route is working' });
});

module.exports = router;