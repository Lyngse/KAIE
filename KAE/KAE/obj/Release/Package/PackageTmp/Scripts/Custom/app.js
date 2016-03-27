var app = angular.module('KAIE', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'Templates/Forside.html',
      controller: 'ForsideController'
    }).
    when('/Nyheder', {
      templateUrl: 'Templates/Nyheder.html',
      controller: 'NyhederController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

app.run(function ($rootScope, $http, $routeParams, $route) {
  $rootScope.apiUrl = "http://sorenlyng.dk";
});