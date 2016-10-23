'use strict';

angular.module('qtHousingApp')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.profileOptions = ['looking', 'renting'];

    // $scope.pronouns = [
    //   {"they":"they / them / their"},
    //   {"ze":" ze / zir / zirs"},
    //   {"she": "she / her / hers"}
    // ];

    $scope.pronouns = ["they", "ze", "she"];


    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          profileType: $scope.user.profileType,
          pronouns: $scope.user.pronouns,
          age: 18,
          headline: ''
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
