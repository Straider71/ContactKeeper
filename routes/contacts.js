const express = require('express');

const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get('/', (req, res) => {
	res.send('Get all contacts');
});

// @route   POST api/contacts
// @desc    Add a new contact
// @access  Private
router.post('/', (req, res) => {
	res.send('Add contact');
});

// @route   PUT api/contacts
// @desc    Update contact
// @access  Private
router.get('/:id', (req, res) => {
	res.send('Update a contact');
});

// @route   DELETE api/contacts
// @desc    Delete a contact
// @access  Private
router.get('/:id', (req, res) => {
	res.send('Delete a contact');
});

module.exports = router;
