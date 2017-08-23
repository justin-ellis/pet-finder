const app = angular.module('PetFinder', []);

app.controller('PetController', ['$http', function($http){
	const controller = this;
    // this.zip = "";
    // this.animal = '';

	this.getBreedList = function(){
		$http({
			method: 'POST',
			url: '/pets/getBreedList',
			//'http:api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=dog&format=json'
            data: {
                zip: this.zip,
								animal: this.animal,
								breed: this.breed,
								sex: this.sex
            }
		}).then(
		function(response){
			console.log(response);
			controller.pets = response.data;
		},
		function(error){

		});
	};

this.getSheltersWithBreeds  = function(animal, breed, shelterId) {

        $http({
            method: "GET",
            url: "/pets/getSheltersWithBreeds",
            data: {
                // name: this.name,
                // description: this.description,
                zip: this.zip,
                animal: this.animal

                // contactemail: this.data.contact.email, //data[0].contact.
                // contactphone: this.data.contact.phone
            }
        }).then(function (response){
            console.log(response);
            controller.shelterInfo = response.data;
            controller.description = response.data[0].description;
            controller.zip = response.data[0].contact.zip;
            controller.animal  = response.data[0].animal;

            console.log(controller.description);
            console.log(controller.zip);
            console.log(controller.animal);
        },
        function(error){
        })
      }

this.findPetListInZip = function(zip){
        $http({
            method: 'GET',
            url: 'http://api.petfinder.com/pet.find?key=37098abef8c6bba64b806723901d3d6a&location=' + zip + '&format=json',
            data: {
                zip: this.zip
            }
            //'http:api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=dog&format=json'
        }).then(
        function(response){
            console.log(response);
            controller.petsInZip = response.data;
            controller.desc = response.data[0].description
            console.log(controller.desc);
        },
        function(error){

        });
    };

}]);
