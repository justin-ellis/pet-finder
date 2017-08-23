
// in env
const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET
const petfinder = require('petfinder')(apiKey, apiSecret);

// const apiKey = process.env.API_KEY
// const apiSecret = process.env.API_SECRET
const getBreedList = (res, body, animal) => {


const zippy = 98335;
const test = {'count': 15}

petfinder.findPet(body.zip, {'animal': body.animal, 'breed': body.breed, 'sex': body.sex, test}, function(err, pet) {
  res.send(pet);
});
};


module.exports = getBreedList;

// http://api.petfinder.com/pet.find?key=37098abef8c6bba64b806723901d3d6a&location=98335&format=json
//finds pets in certain zip

// http://api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=smallfurry&format=json
// finds breeds of certain kind of pet

// http://api.petfinder.com/shelter.find?key=37098abef8c6bba64b806723901d3d6a&location=98335&format=json
// finds shelters with a certain zip
