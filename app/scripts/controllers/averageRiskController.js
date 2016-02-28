/*
 *Average Risk Survey  landing page controller
 */
(function() {
'use strict';


  angular.module('myApp').controller('AverageRiskCtrl', ['$scope', '$location', '$window', '$localStorage', '$sessionStorage', function($scope, $location, $window, $localStorage, $sessionStorage) {

    $scope.token = $localStorage.token;

  }]);

})();
