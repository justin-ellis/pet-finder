const petfinder = require('petfinder')('37098abef8c6bba64b806723901d3d6a', '0e40dc8ff32b8f1be0cbfca13a15f5ed');

const getBreedList = (res, body, animal) => {

<<<<<<< HEAD
  // const response = (res, data) => {
  //   res.send(data)
  // }

<<<<<<< HEAD
<<<<<<< HEAD
// petfinder.getBreedList('cat',function(err, breeds) {
// console.log(breeds)
// })
// }


petfinder.findPet(27615, {'animal': 'dog', 'breed': 'Labrador Retriever', 'count': 25}, function(err, pet) {
=======
petfinder.getBreedList('cat',function(err, breeds) {
console.log(breeds);
});


petfinder.findPet(27615, {'count':3}, function(err, pet) {
>>>>>>> 9464e72772019e96b347777d9d41d613e3dd8dc5
=======
// petfinder.getBreedList('cat',function(err, breeds) {
// console.log(breeds);
// });
const zippy = 98335;
=======
>>>>>>> befc307e8a55c5ce4eda40626869369377b1cf0b
const test = {'count': 3}

petfinder.findPet(body.zip, test, function(err, pet) {
>>>>>>> 7e7e83e67baf2381378e77ca32f2abf53af3c216
  res.send(pet);
});
};


// petfinder.findShelter(27615, {'animal': 'dog','count':10}, function(err, pet) {
//   console.log(pet);
// })
// }

// petfinder.getRandomPet({'animal': 'dog'}, function(err, pet) {
// petfinder.getBreedList('cat',function(err, breeds) {
// console.log(breeds);
// });
//   console.log(pet);
// })
// }


<<<<<<< HEAD
module.exports = getBreedList;
=======
// http://api.petfinder.com/pet.find?key=37098abef8c6bba64b806723901d3d6a&location=98335&format=json
//finds pets in certain zip

// http://api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=smallfurry&format=json
// finds breeds of certain kind of pet

// http://api.petfinder.com/shelter.find?key=37098abef8c6bba64b806723901d3d6a&location=98335&format=json
// finds shelters with a certain zip
>>>>>>> 7e7e83e67baf2381378e77ca32f2abf53af3c216
