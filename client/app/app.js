'use strict';

angular.module('qtHousingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ngMessages',
  'btford.socket-io',
  'ui.router',
  'ngMaterial'
])
  .config(function($mdIconProvider, $mdThemingProvider) {
    $mdIconProvider
      .iconSet('action', '../assets/iconsets/action-icons.svg', 24)
      .iconSet('alert', '../assets/iconsets/alert-icons.svg', 24)
      .iconSet('av', '../assets/iconsets/av-icons.svg', 24)
      .iconSet('communication', '../assets/iconsets/communication-icons.svg', 24)
      .iconSet('content', '../assets/iconsets/content-icons.svg', 24)
      .iconSet('device', '../assets/iconsets/device-icons.svg', 24)
      .iconSet('editor', '../assets/iconsets/editor-icons.svg', 24)
      .iconSet('file', '../assets/iconsets/file-icons.svg', 24)
      .iconSet('hardware', '../assets/iconsets/hardware-icons.svg', 24)
      .iconSet('icons', '../assets/iconsets/icons-icons.svg', 24)
      .iconSet('image', '../assets/iconsets/image-icons.svg', 24)
      .iconSet('maps', '../assets/iconsets/maps-icons.svg', 24)
      .iconSet('navigation', '../assets/iconsets/navigation-icons.svg', 24)
      .iconSet('notification', '../assets/iconsets/notification-icons.svg', 24)
      .iconSet('social', '../assets/iconsets/social-icons.svg', 24)
      .iconSet('toggle', '../assets/iconsets/toggle-icons.svg', 24)
      .iconSet('avatar', '../assets/iconsets/avatar-icons.svg', 128);

      var customPrimary = {
        '50': '#d0b2dd',
        '100': '#c6a0d5',
        '200': '#bb8ecd',
        '300': '#b07cc6',
        '400': '#a66bbe',
        '500': '9B59B6',
        '600': '#8f4baa',
        '700': '#804399',
        '800': '#713b87',
        '900': '#623475',
        'A100': '#dbc3e5',
        'A200': '#e6d5ed',
        'A400': '#f0e7f4',
        'A700': '#532c64'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customAccent = {
        '50': '#0a3934',
        '100': '#0d4f48',
        '200': '#11655c',
        '300': '#157b70',
        '400': '#199083',
        '500': '#1ca697',
        '600': '#24d2bf',
        '700': '#33dcca',
        '800': '#49e0cf',
        '900': '#5ee4d5',
        'A100': '#24d2bf',
        'A200': '#20bcab',
        'A400': '#1ca697',
        'A700': '#74e7db'
    };
    $mdThemingProvider
        .definePalette('customAccent', 
                        customAccent);

    var customWarn = {
        '50': '#dbc07f',
        '100': '#d6b66b',
        '200': '#d0ac58',
        '300': '#caa244',
        '400': '#bf9636',
        '500': '#ab8630',
        '600': '#97762a',
        '700': '#836725',
        '800': '#6f571f',
        '900': '#5b481a',
        'A100': '#e1c993',
        'A200': '#e6d3a7',
        'A400': '#ecddbb',
        'A700': '#473814'
    };
    $mdThemingProvider
        .definePalette('customWarn', 
                        customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#ffffff',
        '500': '#f3f3f3',
        '600': '#e6e6e6',
        '700': '#d9d9d9',
        '800': '#cdcdcd',
        '900': '#c0c0c0',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#b3b3b3'
    };
    $mdThemingProvider
        .definePalette('customBackground', 
                        customBackground);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground')
   

  })
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $urlMatcherFactoryProvider, $compileProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
    $urlMatcherFactoryProvider.strictMode(false);
    $compileProvider.debugInfoEnabled(false);
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })
   

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        $rootScope.logged_in = loggedIn;
        if (next.authenticate && !loggedIn) {
          event.preventDefault();
          $location.path('/login');
        }
      });
    });
  });