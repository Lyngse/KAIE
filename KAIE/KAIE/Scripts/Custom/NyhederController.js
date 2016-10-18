app.controller('NyhederController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
  $scope.Nyheder = "";
  $scope.nyhedTitel = "";
  $scope.nyhedTekst = "";
  $scope.nyhedForfatter = "";
  
  //Indlæs alle nyheder
  $scope.readAllNyheder = function() {
      $http.get($rootScope.apiUrl + "/Public/ReadNyheder")
      .success(function(data)
      {
          if(data.status === "success")
          {
              $scope.nyheder = data;
              console.log($scope.Nyheder.nList);
              console.log("Nyheder loadet");
              console.log($scope.nyheder);
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
  
  //Gå til bestemt nyhed med id
  $scope.gotoNyhed = function (id) {
    $location.url("/Nyheder/" + id);
  }
  
  $scope.gotoCreateNyhed = function() {
      $location.url("/CreateNyhed");
  }
  
}]);
