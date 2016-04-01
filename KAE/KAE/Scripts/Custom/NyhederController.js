app.controller('NyhederController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
  $scope.Nyheder = "";
  $scope.nyhedTitel = "";
  $scope.nyhedTekst = "";
  $scope.nyhedForfatter = "";
  
  //Read nyheder
  $scope.readNyheder = function() {
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
  $scope.getNyheder();
  
  //Opret nyhed
  $scope.createNyhed = function(titel, tekst, forfatter) {
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
  
  //Update nyhed
  $scope.updateNyhed = function(titel, tekst, forfatter) {
    $http.post($rootScope.apiUrl + "/Nyhed/Update", { titel: $scope.Nyheder.Titel, tekst: $scope.Nyheder.Tekst, forfatter: $scope.Nyheder.Forfatter })
    .success(function(data)
    {
      if(data.status === "success")
      {
        console.log("Nyhed opdateret")
      }
      else
      {
        $scope.error = "Nyhed blev ikke opdateret";
        console.log("Nyhed blev ikke opdateret");
      }
    }).error(function(err)
    {
      $scope.updateErr = err;
    })
  }
  
  //Delete nyhed
  $scope.deleteNyhed = function() {
    $http.post($rootScope.apiUrl + "/Nyhed/Delete", { Id: $scope.Nyheder.Id})
    .success(function(data)
    {
      if(data.status === "success")
      {
        console.log("Nyhed er blevet slettet");
        $scope.readNyheder();
      }
      else
      {
        console.log("Nyhed kunne ikke slettes");
        $scope.error = "Nyhed kunne ikke slettes";
      }
    }).error(function(err)
    {
      $scope.deleteErr = err;
    })
  }
  
}]);
