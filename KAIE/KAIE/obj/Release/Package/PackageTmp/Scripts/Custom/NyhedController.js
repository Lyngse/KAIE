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
  
  //Gå tilbage til nyhedsoversigten nyhed med id
  $scope.gotoNyheder = function () {
    $location.url("/Nyheder");
  }
  
  $scope.gotoUpdateNyhed = function (nyheder) {
      $location.url($location.url() +"/Update");
  }

}]);