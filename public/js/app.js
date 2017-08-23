const app = angular.module('PetFinder', []);

app.controller('PetController', ['$http', function($http){
	const controller = this;

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
}]);
