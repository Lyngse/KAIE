app.controller('NyhederController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
  $scope.Nyheder = "";
  
  
  $scope.getNyheder = function() {
    $http.get($rootScope.apiUrl + "/Nyhed/Read?id" + $routeParams.NyhederId)
    .success(function(data)
    {
      if(data.status ==="success")
      {
          $scope.Nyheder = data;
      }
      else
      {
          $scope.error = "Kunne ikke loade nyheder"
      }
    }).error(function(err)
    {
      $scope.error = err;
    })
  }
  //$scope.getNyheder();
  
  //Opret nyhed
  $scope.nyhedTitel = "";
  $scope.nyhedTekst = "";
  $scope.nyhedForfatter = "";
  
  $scope.addNyhed = function(titel, tekst, forfatter) {
    $http.post($rootScope.apiUrl + "/Nyhed/Create", { titel: titel, tekst: tekst, forfatter: forfatter })
    .success(function(data)
    {
      if(data.status === "success")
      {
          console.log("Oprettet..");
      }
      else
      {
          $scope.error = "Nyhed kunne ikke oprettes";
          console.log("Nope");
          console.log(data.details);  
      }
    }).error(function(err)
    {
      $scope.createErr = err;
      console.log("Nej");
    })
  }
  
}]);
