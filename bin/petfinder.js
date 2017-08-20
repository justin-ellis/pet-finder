const petfinder = require('petfinder')('37098abef8c6bba64b806723901d3d6a', '0e40dc8ff32b8f1be0cbfca13a15f5ed');

const getBreedList = (res, data) => {

  // const response = (res, data) => {
  //   res.send(data)
  // }

petfinder.getBreedList('cat',function(err, breeds) {
console.log(breeds)
})


petfinder.findPet(27615, {'animal': 'dog', 'breed': 'Labrador Retriever', 'count': 20}, function(err, pet) {
  res.send(pet);
})
}

module.exports = getBreedList;
// petfinder.findShelter(27615, {'animal': 'dog','count':10}, function(err, pet) {
//   console.log(pet);
// })
// }

// petfinder.getRandomPet({'animal': 'dog'}, function(err, pet) {
//   console.log(pet);
// })
// }