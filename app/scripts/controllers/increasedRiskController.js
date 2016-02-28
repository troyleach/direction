/*
 *Increased Risk Survey  landing page controller
 */
(function() {
'use strict';

  angular.module('myApp').controller('IncreasedRiskCtrl', ['$scope', '$location', '$window', '$localStorage', '$sessionStorage', function($scope, $location, $window, $localStorage, $sessionStorage) {

    $scope.token = $localStorage.token;

  }]);

})();
