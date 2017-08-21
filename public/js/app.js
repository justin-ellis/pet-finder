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
	this.getSheltersWithBreeds  = function(animal, breed, location) {
		$http({
			method: "GET",
			url: "#",
			data: {
				name: this.name,
				description: this.description,
				contact.email: this.contact.email,
				contact.phone: this.contact.phone
			}
		}).then(function, (response){
			console.log(response);
			controller.shelterInfo = response.data;
		}
		function(error){

		}
	),
}

}]);
