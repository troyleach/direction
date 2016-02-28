'use strict';
var myApp = angular.module('myApp', ['ngRoute', // Route service
    'myApp.utilityService', 'myApp.constants', // MISC
    'myApp.directives', 'myApp.filters', // MISC
    'myApp.services', // Services
    'myApp.controller', // controller
    'ngStorage'
]);

myApp.config(['$routeProvider', function($routeProvider) {
        // Login
        $routeProvider.when('/screening_survey', {
            templateUrl: 'partials/screening_survey.html',
            controller: 'ScreeningCtrl'
        });

        $routeProvider.when('/average_risk_survey', {
          templateUrl: 'partials/average_risk_survey.html',
          controller: 'AverageRiskCtrl'
        });

        $routeProvider.when('/increased_risk_survey', {
          templateUrl: 'partials/increased_risk_survey.html',
          controller: 'IncreasedRiskCtrl'
        });
        
        // Default
        $routeProvider.otherwise({
            redirectTo: '/screening_survey'
        });
    }]);
