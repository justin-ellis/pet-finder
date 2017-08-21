const petfinder = require('petfinder')('37098abef8c6bba64b806723901d3d6a', '0e40dc8ff32b8f1be0cbfca13a15f5ed');

const getBreedList = (res, data) => {

  // const response = (res, data) => {
  //   res.send(data)
  // }

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
  res.send(pet);
});
};
// 'animal': 'dog', 'breed': 'Labrador Retriever', 'count': 20

// petfinder.findShelter(27615, {'animal': 'dog','count':10}, function(err, pet) {
//   console.log(pet);
// })
// }

// petfinder.getRandomPet({'animal': 'dog'}, function(err, pet) {
//   console.log(pet);
// })
// }


module.exports = getBreedList;
