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
      controller: 'NyhedController'
    }).
    when('/Nyheder/:nyhederId/Update', {
      templateUrl: 'Templates/UpdateNyhed.html',
      controller: 'NyhedController'
    }).
    when('/CreateNyhed', {
      templateUrl: 'Templates/CreateNyhed.html',
      controller: 'NyhederController'
    }).
    when('/NyhedsDashboard', {
      templateUrl: 'Templates/NyhedsDashboard.html',
      controller: 'NyhedsDashboardController'
    }).
    when('/Kontakt', {
      templateUrl: 'Templates/Kontakt.html',
      controller: 'RandomController'
    }).
    when('/Hallen', {
      templateUrl: 'Templates/hallen.html',
      controller: 'RandomController'
    }).
    when('/Sponsorer', {
      templateUrl: 'Templates/Sponsorer.html',
      controller: 'RandomController'
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

