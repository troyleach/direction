/*
 * Screening survey landing page controller
 */
(function() {
'use strict';

  var controllerModule = angular.module('myApp.controller', []);

  controllerModule.controller('ScreeningCtrl', ['$scope', '$location', '$localStorage', '$sessionStorage', function($scope, $location, $localStorage, $sessionStorage) {
    
    localStorage.clear();
    $localStorage.$reset();
    var risk = $location.search().r;
    $localStorage.token = $location.search().t;

    if(risk === 'low'){
      $scope.landingPage = '#/average_risk_survey';
    } else if(risk === 'high') {
      $scope.landingPage = '#/increased_risk_survey';
    } else {
      $scope.landingPage = '#/average_risk_survey';
    };

  }]);

})();
