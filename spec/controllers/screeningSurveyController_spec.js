'use strict';

describe('Controller: ScreeningSurveyController', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var ScreeningCtrl, scope, $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    scope = $rootScope.$new();
    $location = _$location_;
    spyOn($location, 'search').and.returnValue( { r: 'high' } );

    ScreeningCtrl = $controller('ScreeningCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(ScreeningCtrl).toBeDefined();
      expect(ScreeningCtrl).not.toBeNull();
  });

  it('Expect risk to be high and to be sent to the increased risk landing page', function() {
    expect(scope.landingPage).toBe('#/increased_risk_survey');
  })

});