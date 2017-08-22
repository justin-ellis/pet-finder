const express = require('express');
const router = express.Router();
const Pets = require('../models/pets.js');
// const getBreeds = require('../bin/petfinder.js')
const getBreedList = require('../bin/petfinder.js')


router.post('/getBreedList', (req, res)=>{
	console.log('req.body: ', req.body);
	getBreedList(res, req.body);

	// Pets.find({}, (err foundUsers)=>{
	// 	res.json(foundPets);
	// });
});

// router.post('/getBreeds', (req, res)=>{
// 	console.log('req.body: ', req.body);
// 	getBreeds(res, req.body);
// });


router.get('/getSheltersWithBreeds', (req, res)=>{
	console.log('req.body: ', req.body);
	getSheltersWithBreeds(res, req.body.zip,
		req.body.animal);
		
});

module.exports = router;
