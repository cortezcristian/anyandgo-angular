'use strict';

/**
 * @ngdoc overview
 * @name anyandgoApp
 * @description
 * # anyandgoApp
 *
 * Main module of the application.
 */
angular
  .module('anyandgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sample', {
        templateUrl: 'views/sample.html',
        controller: 'SampleCtrl'
      })
      .when('/sample-new', {
        templateUrl: 'views/sample-new.html',
        controller: 'SampleNewCtrl'
      })
      .when('/sample-edit', {
        templateUrl: 'views/sample-edit.html',
        controller: 'SampleEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
      RestangularProvider.setBaseUrl('http://localhost:3000/api/v1');
      RestangularProvider.setRestangularFields({
        id: '_id.$oid'
      });
      
      RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
        
        if (operation === 'put') {
          elem._id = undefined;
          return elem;
        }
        return elem;
      });
  });
