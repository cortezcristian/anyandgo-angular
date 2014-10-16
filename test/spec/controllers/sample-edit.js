'use strict';

describe('Controller: SampleEditCtrl', function () {

  // load the controller's module
  beforeEach(module('anyandgoApp'));

  var SampleEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleEditCtrl = $controller('SampleEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
