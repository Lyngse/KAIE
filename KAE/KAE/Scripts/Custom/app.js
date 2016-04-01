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
    when('/Nyheder/:nyhederId', {
      templateUrl: 'Templates/Nyhed.html',
      controller: 'NyhederController'
    }).
    when('/NyNyhed', {
      templateUrl: 'Templates/NyNyhed.html',
      controller: 'NyhederController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

app.run(function ($rootScope, $http, $routeParams, $route) {
    $rootScope.apiUrl = "http://sorenlyng.dk";
    
    //Bruges til at teste med!
    /*$rootScope.apiUrl = "http://localhost:54565";*/
});

