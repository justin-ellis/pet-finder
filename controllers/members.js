const express = require('express');
const router = express.Router();
const Members = require('../models/members.js');

router.get('/', (req, res)=>{
	Members.find({}, (err, foundMembers)=>{
		res.json(foundMembers);
	});
});

module.exports = router;