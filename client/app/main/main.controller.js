'use strict';

angular.module('qtHousingApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {


    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.is_loading = true;

    if($scope.isLoggedIn()) {

      $scope.currentUser = Auth.getCurrentUser();

      // $scope.persons = [{
      //   'firstName': 'Hannah',
      //   'lastName': 'Scar',
      //   'headline': 'Looking for a cool cat to share some space with me...',
      //   'pronouns': 'they / them'
      // },{
      //   'firstName': 'Hannah',
      //   'lastName': 'Scar',
      //   'headline': 'Looking for a cool cat to share some space with me...',
      //   'pronouns': 'they / them'
      // },{
      //   'firstName': 'Hannah',
      //   'lastName': 'Scar',
      //   'headline': 'Looking for a cool cat to share some space with me...',
      //   'pronouns': 'they / them'
      // },{
      //   'firstName': 'Hannah',
      //   'lastName': 'Scar',
      //   'headline': 'Looking for a cool cat to share some space with me...',
      //   'pronouns': 'they / them'
      // },{
      //   'firstName': 'Hannah',
      //   'lastName': 'Scar',
      //   'headline': 'Looking for a cool cat to share some space with me...',
      //   'pronouns': 'they / them'
      // },{
      //   'firstName': 'Hannah',
      //   'lastName': 'Scar',
      //   'headline': 'Looking for a cool cat to share some space with me...',
      //   'pronouns': 'they / them'
      // },{
      //   'firstName': 'Hannah',
      //   'lastName': 'Scar',
      //   'headline': 'Looking for a cool cat to share some space with me...',
      //   'pronouns': 'they / them'
      // },];

      $scope.persons = [];


      $http.get("/api/users/feed", {
        params: $scope.currentUser
      })
      .then(
        function(data) {

          console.log('what');
          console.log(data);

          if('errors' in data.data && data.data.errors.length) {
            console.log(data.data.errors);
          }
          else {
            console.log('blah');
            console.log(data.data);

            $scope.persons = data.data;
            
          }

        },
        function(data) {
          console.log(data);
      });

      $scope.is_loading = false;

    }
    else {



      $scope.is_loading = false;
    }
  });
