const app = angular.module('PetFinder', []);


app.controller('PetController', ['$http', function($http){
	const controller = this;
	let petArray = [];
	this.currentMember = "";

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
		// console.log(petArray[index]);
		$http({
			method: 'POST',
			url: '/members/getPetData',
			data: {
				// user:
				petData: petArray[index]
			}
		}).then(
		function(response){
			// console.log(response);
		},
		function(error){

		});

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
    // this.savePet(0);

    this.getMembers = function(){
			$http({
				method: 'GET',
				url: '/members',
				data: {
					username: this.username
				}
			}).then(
			function(response){
				console.log(response.data.username);
				controller.currentMember = response.data.username;
			},
			function(err){
				console.log(err);
			});
		};

		this.registerUser = function(username, password){
		$http({
			method: 'POST',
			url: '/session/register',
			data: {
				username: this.registeredUsername,
				password: this.registeredPassword
			}
		}).then(
		function(response){
			controller.registeredUsername = '';
			controller.registeredPassword = '';
			controller.newUser = response.data;
			console.log(response.data);
			controller.getMembers();

			if(response.data){
				controller.currentMember = controller.username;
				controller.loggedIn = true;
			}
		},
		function(err){
			console.log(err);
		});
				this.getMembers();
	};

	this.login = function(username, password){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/session/login',
			data: {
				username: this.username,
				password: this.password,
			}
		}).then(
		function(response){
			controller.username = "";
			controller.password = "";
			controller.getMembers();
			if(response.data != true){
				console.log('wrong username or password');
				controller.loggedIn = false;
			}
			else if(response.data){
				controller.currentMember = controller.username;
			}
		},
		function(err){
			console.log(err);
		});

	};


}]);
