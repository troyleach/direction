'use strict';

describe('Controller: IncreasedRiskController', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var AverageRiskCtrl, $localStorage = {}, scope;
  var token = '3245a6a09c25low';

  beforeEach(function() {
    $localStorage.token = token;
    module(function($provide){
      $provide.value('$localStorage', $localStorage);
    });
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AverageRiskCtrl = $controller('AverageRiskCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(AverageRiskCtrl).toBeDefined();
      expect(AverageRiskCtrl).not.toBeNull();
  });

  it('Increased risk returns a token', function () {
    expect(scope.token).toBe('3245a6a09c25low');
  });

});