const app = angular.module('PetFinder', []);


app.controller('PetController', ['$http', function($http){
	const controller = this;
	let petArray = [];
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
			petArray = [];
			for (i = 0; i < 24; i++) {
			petArray.push(response.data[i]);
			
			}
			controller.pets = response.data;
		},
		function(error){
		});
	};

	this.savePet = function(index){
		console.log(petArray[index]);
		// Member.wishlist.push(petArray[index]);
	};
		// console.log(index);
		// $http({
		// 	method: 'PUT',
		// 	url: '/members',

		// }).then(
  //       function(response){
  //           console.log(response);
  //       },
  //       function(error){
  //       });


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
