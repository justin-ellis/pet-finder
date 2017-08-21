const app = angular.module('PetFinder', []);


app.controller('PetController', ['$http', function($http){
	const controller = this;
		this.zip = '';
	this.getBreedList = function(){
		$http({
			method: 'GET',
			url: 'pets/getBreedList'
			//'http:api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=dog&format=json'
		}).then(
		function(response){
			console.log(response);

			controller.pets = response.data;
			controller.zip = response.data.zip;
		},
		function(error){
			console.log(error);
		});
	};
	// this.getTacos = function(){
	// 	$http({
	// 		method: 'GET',
	// 		url: 'http:api.petfinder.com/pet.find?key=37098abef8c6bba64b806723901d3d6a&animal=cat&format=json'

	// 	}).then(
	// 	function(response){
	// 		console.log(response);
	// 		controller.tacos = response.data;
	// 	},
	// 	function(error){
	// 		});
	// };
	this.getBreedListZip = function(){
		$http({
			method: 'GET',
			url: 'pets/getBreedListZip'
			//'http:api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=dog&format=json'
		}).then(
		function(response){
			console.log(response);

			controller.pets = response.data;
			controller.zip = response.data.zip;
		},
		function(error){
			console.log(error);
		});
	};

}]);
