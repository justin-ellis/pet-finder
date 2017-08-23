const app = angular.module('PetFinder', []);

app.controller('PetController', ['$http', function($http){
	const controller = this;

	this.getBreedList = function(){
		$http({
			method: 'POST',
			url: '/pets/getBreedList',
            data: {
                zip: this.zip,
            }
		}).then(
		function(response){
			console.log(response);

            // for (var i = 0; i < response.data.length; i++) {
            //     response[data.i]
            // }




            window.localStorage['petData'] = angular.toJson(response);
			controller.pets = response.data;
		},
		function(error){

		});
	};
    this.showStoredData = function(){
        var storedData = window.localStorage['petData'];
        console.log(storedData);
    };
}]);
