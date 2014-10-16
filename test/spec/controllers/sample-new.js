'use strict';

describe('Controller: SampleNewCtrl', function () {

  // load the controller's module
  beforeEach(module('anyandgoApp'));

  var SampleNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleNewCtrl = $controller('SampleNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
