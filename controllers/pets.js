const express = require('express');
const router = express.Router();
const Pets = require('../models/pets.js');
const getBreedList = require('../bin/petfinder.js')
const getSheltersWithBreeds = require('../bin/petfinder.js')

router.post('/getBreedList', (req, res)=>{
	console.log('req.body: ', req.body);
	getBreedList(res, req.body,
		req.body.animal);

	// Pets.find({}, (err foundUsers)=>{
	// 	res.json(foundPets);
	// });
});

router.get('/getSheltersWithBreeds', (req, res)=>{
	console.log('req.body: ', req.body);
	getSheltersWithBreeds(res, req.body.zip,
		req.body.animal);

});

//start of get route for ishList function, nott sure if we will use or not
// router.post("", (req, res)=>{
// 	console.log('req.body: ', req.body);
// 	wishList(res, req.body)
// })

module.exports = router;
