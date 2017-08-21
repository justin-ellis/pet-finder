const petfinder = require('petfinder')('37098abef8c6bba64b806723901d3d6a', '0e40dc8ff32b8f1be0cbfca13a15f5ed');
const bodyParser = require('body-parser');

const getBreedList = (res, data) => {
	console.log(data);
	console.log('--------------------');
	console.log(res);
  // const response = (res, data) => {
  //   res.send(data)
  // }

// petfinder.getBreedList('cat',function(err, breeds) {
// console.log(breeds);
// });


petfinder.findPet(98335, {'animal': 'dog', 'breed': 'Labrador Retriever', 'count': 20}, function(err, pet) {
  res.send(pet);
  	console.log(data);
	console.log('--------------------');
	console.log(res);
  
});
};

const getBreedListZip = (zip) =>{ 
	petfinder.findPet(zip, {}, function(err, res){
		console.log(res);
		console.log(zip);
	});
};

module.exports = getBreedList;
module.exports = getBreedListZip;
// petfinder.findShelter(27615, {'animal': 'dog','count':10}, function(err, pet) {
//   console.log(pet);
// })
// }

// petfinder.getRandomPet({'animal': 'dog'}, function(err, pet) {
//   console.log(pet);
// })
// }