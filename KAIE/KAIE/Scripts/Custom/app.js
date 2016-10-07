var app = angular.module('KAIE', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngAria', 'ngMessages', 'flow', 'ngMaterial'  ]);

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
  when('/Nyheder/Nyhed' /*:nyhederId'*/, {
    templateUrl: 'Templates/Nyhed.html',
    controller: 'NyhedController'
  }).
  when('/Nyheder/:nyhederId/Update', {
    templateUrl: 'Templates/UpdateNyhed.html',
    controller: 'NyhedController'
  }).
  when('/NyhedsDashboard', {
    templateUrl: 'Templates/NyhedsDashboard.html',
    controller: 'NyhedsDashboardController'
  }).
  when('/Kontakt', {
    templateUrl: 'Templates/Kontakt.html',
    controller: 'RandomController'
  }).
  when('/Galleri', {
    templateUrl: 'Templates/Galleri.html',
    controller: 'GalleriController'
  }).
  when('/Hallen', {
    templateUrl: 'Templates/hallen.html',
    controller: 'RandomController'
  }).
  when('/Sponsorer', {
    templateUrl: 'Templates/Sponsorer.html',
    controller: 'RandomController'
  }).
  when('/Udlejning', {
    templateUrl: 'Templates/Udlejning.html',
    controller: 'UdlejningController'
  }).
  when('/Begivenheder', {
    templateUrl: 'Templates/Begivenheder.html',
    controller: 'BegivenhederController'
  }).
  when('/Login', {
    templateUrl: 'Templates/Login.html',
    controller: 'LoginController'
  }).
  when('/Administrator/NyNyhed', {
    templateUrl: 'Templates/Administrator/CreateNyhed.html',
    controller: 'AdministratorController'
  }).
  when('/Administrator/Galleri', {
    templateUrl: 'Templates/Administrator/Galleri.html',
    controller: 'AdministratorController'
  }).
  when('/Administrator/GalleriGrid', {
    templateUrl: 'Templates/AdministratorGalleriGrid.html',
    controller: 'AdministratorController'
  }).
  when('/Administrator/Nyhed', {
    templateUrl: 'Templates/Administrator/Nyhed.html',
    controller: 'AdministratorController'
  }).
  when('/Administrator/NyhedsGrid', {
    templateUrl: 'Templates/Administrator/NyhedsGrid.html',
    controller: 'AdministratorController'
  }).
  when('/Boldklubben', {
    templateUrl: 'Templates/Foreninger/Boldklubben.html',
    controller: 'ForeningerController'
  }).
  when('/Borgerforening', {
    templateUrl: 'Templates/Foreninger/Borgerforening.html',
    controller: 'ForeningerController'
  }).
  when('/FDF', {
    templateUrl: 'Templates/Foreninger/FDF.html',
    controller: 'ForeningerController'
  }).
  when('/FoS', {
    templateUrl: 'Templates/Foreninger/FoS.html',
    controller: 'ForeningerController'
  }).
  when('/Fællesspisning', {
    templateUrl: 'Templates/Foreninger/Fællesspisning.html',
    controller: 'ForeningerController'
  }).
  when('/Gymnastikforening', {
    templateUrl: 'Templates/Foreninger/Gymnastikforening.html',
    controller: 'ForeningerController'
  }).
  when('/Hallen', {
    templateUrl: 'Templates/Foreninger/Hallen.html',
    controller: 'ForeningerController'
  }).
  when('/LokalArkiv', {
    templateUrl: 'Templates/Foreninger/LokalArkiv.html',
    controller: 'ForeningerController'
  }).
  when('/Menighedsråd', {
    templateUrl: 'Templates/Foreninger/Menighedsråd.html',
    controller: 'ForeningerController'
  }).
  when('/Revy', {
    templateUrl: 'Templates/Foreninger/Revy.html',
    controller: 'ForeningerController'
  }).
  when('/Skolen', {
    templateUrl: 'Templates/Foreninger/Skolen.html',
    controller: 'ForeningerController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);

app.run(function ($rootScope, $http, $routeParams, $route, $location) {
    $rootScope.apiUrl = "http://sorenlyng.dk/";
    
    //Bruges til at teste med!
    /*$rootScope.apiUrl = "http://localhost:54565";*/
  
  $rootScope.isActive = function(location) {
    return location == $location.path();
  }
  
  $rootScope.isLoggedIn = false;
  $http.get($rootScope.apiUrl + "authentication/isLogged").then(function(response) {
      var data = response.data;
      if (data.status === "success") {
        if (($rootScope.isLoggedIn = data.isLoggedIn) === true) {
          $rootScope.loggedInUserId = data.userId;
        }
      } else {

      }
    }, function(err) {
     
    });

    $rootScope.logout = function() {
    $http.post($rootScope.apiUrl + "authentication/logout").then(function(response) {
      var data = response.data;
      if (data.status === "success") {
        $rootScope.isLoggedIn = false;
        $rootScope.loggedInUserId = null;
        $location.path('/');
      } else {

      }
    }, function(err) {
      $rootScope.errorHandler(err);
    });
  }
});

app.config(function() {

});

