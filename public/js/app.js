const app = angular.module('PetFinder', []);

app.controller('PetController', ['$http', function($http){
  console.log("inside controller");
    const controller = this;
    // this.zip = "";
    // this.animal = '';
    this.getBreedList = function(){
        $http({
            method: 'POST',
            url: '/pets/getBreedList',
            //'http:api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=dog&format=json'
            data: {
                zip: this.zip
            }
        }).then(
        function(response){
            console.log(response);
            controller.pets = response.data;
        },
        function(error){
        });
    };
    // this.getBreeds = function(){
    //     $http({
    //         method: 'POST',
    //         url: '/pets/getBreeds',
    //         //'http:api.petfinder.com/breed.list?key=37098abef8c6bba64b806723901d3d6a&animal=dog&format=json'
    //         data: {
    //             animal: this.animal
    //         }
    //     }).then(
    //     function(response){
    //         console.log(response);
    //         controller.breeds = response.data;
    //     },
    //     function(error){
    //     });
    // };
            // this.wishList = function(){
            //     this.message = ("Thank you. Your wishlist will be submitted to the adoption shelters in your area.They will reach out to you if the animal on your list becomes available.");
            //     $http({
            //         method: "POST",
            //         url: "#",
            //         data: {
            //             // animal: this.animal,
            //             // breed: this.breed,
            //             size: this.size,
            //             sex: this.sex,
            //             age: this.age,
            //             location: this.location
            //         }
            //     }).then (
            //         function(){
            //             console.log("success");
            //             return this.message;
            //         },
            //         function(error){
            //         });
            // };
    //         this.toggle = true;
    //         this.toggleView = ()=> {
    //             this.toggle = !this.toggle;
    //         };
    //         $scope.function = myFunction() => {
    // const popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
    // }
    console.log("onside controller");
}]);
