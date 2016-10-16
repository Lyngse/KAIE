app.controller('NyhedsDashboardController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
  $scope.Nyheder = "";
  $scope.nyhedTitel = "";
  $scope.nyhedTekst = "";
  $scope.nyhedForfatter = "";
  
  //Indlæs alle nyheder
  $scope.readAllNyheder = function() {
      $http.get($rootScope.apiUrl + "/Administrator/ReadNyheder")
      .success(function(data)
      {
          if(data.status === "success")
          {
              $scope.Nyheder = data;
              console.log($scope.Nyheder.nList);
              console.log("Nyheder loadet");
          }
          else
          {
            $scope.error = "Kunne ikke loade nyheder";
            console.log("Kunne ikke loade nyheder");    
          }
      }).error(function(err)
      {
          $scope.readErr = err;
      })
  }
  $scope.readAllNyheder();
  
   //Update nyhed
  $scope.updateNyhed = function() {
    $http.post($rootScope.apiUrl + "/Administrator/UpdateNyhed", { id: $scope.Nyhed.Id, titel: $scope.Nyhed.Titel, tekst: $scope.Nyhed.Tekst, forfatter: $scope.Nyhed.Forfatter })
    .success(function(data)
    {
      if(data.status === "success")
      {
        console.log("Nyhed opdateret");
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
  $scope.deleteNyhed = function(nyheder) {
    $http.post($rootScope.apiUrl + "/Administrator/DeleteNyhed", { Id: nyheder.Id})
    .success(function(data)
    {
      if(data.status === "success")
      {
        console.log("Nyhed er blevet slettet");
        $scope.readAllNyheder();
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