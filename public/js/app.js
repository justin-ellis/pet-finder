const app = angular.module('PetFinder', []);

app.controller('PetController', ['$http', function($http){
	const controller = this;

	this.getBreedList = function(){
		$http({
			method: 'GET',
			url: '/pets/getBreedList'
		}).then(
		function(response){
			console.log(response);
			controller.pets = response.data;
		},
		function(error){
		}
	);
};
	this.getSheltersWithBreeds  = function(animal, breed, callback) {
		$http({
			method: "GET",
			url: "#",
			data: {
				// name: this.name,
				breed: this.breed,
				size: this.size,
				sex: this.sex,
				age: this.age,
				location: this.location
			}
		}).then(function, (response){
			console.log(response);
		})
	}

}]);
