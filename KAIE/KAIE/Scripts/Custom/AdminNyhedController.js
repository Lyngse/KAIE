app.controller('AdminNyhedController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) { 
  //Indlæs bestemt nyheder fra deres id
  $scope.readNyheder = function() {
    $http.get($rootScope.apiUrl + "/Public/ReadNyhed?id=" + $routeParams.nyhederId)
    .success(function(data)
    {
      if(data.status ==="success")
      {
          $scope.Nyhed = data;
          console.log("Nyhed loaded");                                     
      }
      else
      {
          $scope.error = "Kunne ikke loade nyhed"
      }
    }).error(function(err)
    {
      $scope.error = err;
    })
  }
  $scope.readNyheder();
  
  //Update nyhed
  $scope.updateNyhed = function(titel, tekst, forfatter) {
    $http.post($rootScope.apiUrl + "/Administrator/UpdateNyhed", { titel: $scope.Nyheder.Titel, tekst: $scope.Nyheder.Tekst, forfatter: $scope.Nyheder.Forfatter })
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
  $scope.deleteNyhed = function() {
    $http.post($rootScope.apiUrl + "/Administrator/DeleteNyhed", { Id: $scope.Nyheder.Id})
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