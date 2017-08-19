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

		});
	};

}]);
