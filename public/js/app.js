const app = angular.module('PetFinder', []);

app.controller('PetController', ['$http', function($http){
	const controller = this;
	const petArray = [];
	this.getBreedList = function(){
		$http({
			method: 'POST',
			url: '/pets/getBreedList',
			dataType: 'json',
            data: {
                zip: this.zip,
								animal: this.animal,
								breed: this.breed,
								sex: this.sex
            }
		}).then(
		function(response){
			for (i = 0; i < 24; i++) {
			console.log(response.data[i]);
			petArray.push(response.data[i]);
			
			}
  	console.log(petArray);
			controller.pets = response.data;
		},
		function(error){
		});
	};

// window.localStorage['petData'][i] = angular.toJson(response.data[i]);
// 	this.showStoredData = function(){
//         var storedData = window.localStorage['petData'][i];
//         console.log(storedData);
//     };

	this.findShelter = function(){
        $http({
            method: 'POST',
            url: '/pets/findShelter',
            data: {
                zippy: this.zippy,
            }
        }).then(
        function(response){
            console.log(response);
            controller.shelters = response.data;
        },
        function(error){
        });
    };
}]);
