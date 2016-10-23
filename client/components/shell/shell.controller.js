'use strict';

angular.module('qtHousingApp')
  .controller('ShellCtrl', function ($mdSidenav, $mdDialog, $scope, $location, Auth) {

    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };

    var originatorEv;
    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
  });