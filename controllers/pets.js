const express = require('express');
const router = express.Router();
const Pets = require('../models/pets.js');
const getBreedList = require('../bin/petfinder.js')
const getSheltersWithBreeds = require('../bin/petfinder.js')

router.get('/getBreedList', (req, res)=>{

	getBreedList(res);

	
	// Pets.find({}, (err, foundUsers)=>{
	// 	res.json(foundPets);
	// });
});

router.get('/getSheltersWithBreeds', (req, res)=>{
	getSheltersWithBreeds(res);
});

module.exports = router;
