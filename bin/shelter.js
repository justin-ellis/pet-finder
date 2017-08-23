const apiKey = process.env.API_KEY
const apiSecret = process.env.API_SECRET
const petfinder = require('petfinder')(apiKey, apiSecret);

// const apiKey = process.env.API_KEY
// const apiSecret = process.env.API_SECRET


const findShelter = (res, body) =>{
petfinder.findShelter(body.zippy, {}, function(err, shelter) {
    res.send(shelter);
});
};

module.exports = findShelter;
