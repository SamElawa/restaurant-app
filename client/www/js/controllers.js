// app.servies is required by app.controllers
angular.module('app.controllers', ['app.services'])

.controller('AppCtrl', function($scope, App) {
  
  $scope.login = App.login;

})

.controller('CustomerCtrl', function($scope, Customer) {

  $scope.signup = Customer.signup;
  $scope.searchResults = Customer.searchResults;
  // invoked after submitting search criteria form
  $scope.getSearchResults = Customer.getSearchResults;
  $scope.chooseRestaurant = Customer.chooseRestaurant;

})

.controller('RestaurantCtrl', function($scope, Restaurant) {

  $scope.signup = Restaurant.signup;
  $scope.toggleAvailability = Restaurant.toggleAvailability;
  $scope.interestedCustomers = Restaurant.interestedCustomers;
  $scope.chooseCustomer = Restaurant.chooseCustomer;

})

;
