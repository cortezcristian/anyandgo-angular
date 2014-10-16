'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:SampleNewCtrl
 * @description
 * # SampleNewCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('SampleNewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
