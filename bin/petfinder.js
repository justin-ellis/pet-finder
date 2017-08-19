const petfinder = require('petfinder')('37098abef8c6bba64b806723901d3d6a', '0e40dc8ff32b8f1be0cbfca13a15f5ed');

const getBreedList = (res, data) => {

  const response = (res, data) => {
    res.send(data)
  }

petfinder.getBreedList('cat',function(err, breeds) {
console.log(breeds)
})
}

module.exports = getBreedList;
