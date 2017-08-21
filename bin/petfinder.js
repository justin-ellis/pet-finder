const petfinder = require('petfinder')('37098abef8c6bba64b806723901d3d6a', '0e40dc8ff32b8f1be0cbfca13a15f5ed');

const getBreedList = (res, zip, animal) => {

  // const response = (res, data) => {
  //   res.send(data)
  // }

petfinder.getBreedList('cat',function(err, breeds) {
console.log(breeds);
});



petfinder.findPet(98335, {'count': 3}, function(err, pet) {
  res.send(pet);
});
};
// 'animal': 'dog', 'breed': 'Labrador Retriever', 'count': 20

module.exports = getBreedList;
// petfinder.findShelter(27615, {'animal': 'dog','count':10}, function(err, pet) {
//   console.log(pet);
// })
// }

// petfinder.getRandomPet({'animal': 'dog'}, function(err, pet) {
//   console.log(pet);
// })
// }


// http://api.petfinder.com/pet.find?key=37098abef8c6bba64b806723901d3d6a&location=98335&format=json
//finds pets in certain zip

// http://api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=smallfurry&format=json
// finds breeds of certain kind of pet

// http://api.petfinder.com/shelter.find?key=37098abef8c6bba64b806723901d3d6a&location=98335&format=json
// finds shelters with a certain zip