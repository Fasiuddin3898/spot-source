// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Store contact form data in MongoDB
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'All fields (name, email, message) are required' 
      });
    }

    // Create and save contact to MongoDB
    const contact = new Contact({ 
      name, 
      email, 
      message 
    });
    
    await contact.save();

    // Success response
    res.status(201).json({ 
      message: 'Contact form submitted successfully!',
      contactId: contact._id 
    });

  } catch (error) {
    console.error('Error saving contact form:', error);
    
    // Handle MongoDB validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Invalid data provided' 
      });
    }
    
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
});

// Optional: GET endpoint to retrieve contacts (for admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

module.exports = router;