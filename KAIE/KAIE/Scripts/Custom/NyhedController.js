app.controller('NyhedController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
  
  //Indlæs bestemt nyheder fra deres id
  $scope.readNyheder = function() {
    $http.get($rootScope.apiUrl + "/Nyheder/Read?id=" + $routeParams.nyhederId)
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
  $scope.updateNyhed = function() {
    $http.post($rootScope.apiUrl + "/Nyheder/Update", { id: $scope.Nyhed.Id, titel: $scope.Nyhed.Titel, tekst: $scope.Nyhed.Tekst, forfatter: $scope.Nyhed.Forfatter })
    .success(function(data)
    {
      if(data.status === "success")
      {
        console.log("Nyhed opdateret");
        $scope.readNyheder();
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
    $http.post($rootScope.apiUrl + "/Nyheder/Delete", { Id: $routeParams.nyhederId})
    .success(function(data)
    {
      if(data.status === "success")
      {
        console.log("Nyhed er blevet slettet");
        $scope.gotoNyheder();
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
  
  //Gå tilbage til nyhedsoversigten nyhed med id
  $scope.gotoNyheder = function () {
    $location.url("/Nyheder");
  }
  
  $scope.gotoUpdateNyhed = function (nyheder) {
      $location.url($location.url() +"/Update");
  }
  
  
  
}]);