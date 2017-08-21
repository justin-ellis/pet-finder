const express = require('express');
const router = express.Router();
const Pets = require('../models/pets.js');
const getBreedList = require('../bin/petfinder.js')
const getBreedListZip = require('../bin/petfinder.js')

router.get('/getBreedList', (req, res)=>{

	getBreedList(res);
	//calling function from bin

	
	// Pets.find({}, (err, foundUsers)=>{
	// 	res.json(foundPets);
	// });
});

router.get('/getBreedListZip/:zip', (req, res)=>{
	console.log(req.params.zip);
	// getBreedListZip(zip);

});



module.exports = router;
