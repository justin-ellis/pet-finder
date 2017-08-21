const app = angular.module('PetFinder', []);

app.controller('PetController', ['$http', function($http){
	const controller = this;

	this.getBreedList = function(){
		$http({
			method: 'GET',
			url: '/pets/getBreedList'
			//'http:api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=dog&format=json'
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
                name: this.name,
                description: this.description,
                // contactemail: this.data.contact.email, //data[0].contact.
                // contactphone: this.data.contact.phone
            }
        }).then(function (response){
            console.log(response);
            controller.shelterInfo = response.data;
        },
        function(error){
        })
      }

}]);
