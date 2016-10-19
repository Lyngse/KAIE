app.controller('GallerierController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
 $scope.readGallerier = function() {
    $http.get($rootScope.apiUrl + "/Public/ReadAlbums")
    .success(function(data)
    {
      if(data.status === "success")
      {
        $scope.gallerier = data;
        console.log("Gallerier loadet");
      }
      else
      {
        $scope.error = "Kunne ikke loade gallerier";
        console.log("Kunne ikke loade gallerier");    
      }
    }).error(function(err)
    {
      $scope.readErr = err;
    })
  }
  $scope.readGallerier();
}]);