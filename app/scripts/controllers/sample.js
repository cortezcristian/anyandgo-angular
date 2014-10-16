'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:SampleCtrl
 * @description
 * # SampleCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('SampleCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
