'use strict';

angular.module('qtHousingApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {


    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.is_loading = true;

    if($scope.isLoggedIn()) {

      console.log('hello');

      $scope.currentUser = Auth.getCurrentUser();

      $scope.persons = [{
        'firstName': 'Hannah',
        'lastName': 'Scar',
        'headline': 'Looking for a cool cat to share some space with me...',
        'pronouns': 'they / them'
      },{
        'firstName': 'Hannah',
        'lastName': 'Scar',
        'headline': 'Looking for a cool cat to share some space with me...',
        'pronouns': 'they / them'
      },{
        'firstName': 'Hannah',
        'lastName': 'Scar',
        'headline': 'Looking for a cool cat to share some space with me...',
        'pronouns': 'they / them'
      },{
        'firstName': 'Hannah',
        'lastName': 'Scar',
        'headline': 'Looking for a cool cat to share some space with me...',
        'pronouns': 'they / them'
      },{
        'firstName': 'Hannah',
        'lastName': 'Scar',
        'headline': 'Looking for a cool cat to share some space with me...',
        'pronouns': 'they / them'
      },{
        'firstName': 'Hannah',
        'lastName': 'Scar',
        'headline': 'Looking for a cool cat to share some space with me...',
        'pronouns': 'they / them'
      },{
        'firstName': 'Hannah',
        'lastName': 'Scar',
        'headline': 'Looking for a cool cat to share some space with me...',
        'pronouns': 'they / them'
      },];

      console.log($scope.persons);

      $scope.is_loading = false;




    }
    else {



      $scope.is_loading = false;
    }
  });
