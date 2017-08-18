const app = angular.module('PetFinder', []);

app.controller('PetController', ['$http', function($http){
	const controller = this;

	this.getPets = function(){
		$http({
			method: 'GET',
			url: '/pets'
		}).then(
		function(response){
			console.log(response);
			controller.pets = response.data;
		},
		function(error){

		});
	};
}]);