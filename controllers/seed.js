const express = require('express');
const router = express.Router();

const pets = require('../models/pets.js');

const petData = [

];

router.get('/', (req, res) => {
	Pet.create(newPet, function(err) {
		if (err) {
			console.log(err);
			res.send('error seeding');
		} else {
			console.log('seeded');
			res.redirect('/pets')
		}
	});
});

router.get( '/dropdatabase' , (req , res ) => {
 Pet.collection.drop();
 res.send ('You did it! You dropped the database!');
});

module.exports = router;