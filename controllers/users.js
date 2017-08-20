const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');

router.get('/', (req, res)=>{
	Users.find({}, (err, foundUsers)=>{
		res.json(foundUsers);
	});
});

module.exports = router;
