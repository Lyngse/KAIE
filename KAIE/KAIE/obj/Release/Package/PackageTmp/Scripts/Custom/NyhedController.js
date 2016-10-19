app.controller('NyhedController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
  
  //Indlæs bestemt nyheder fra deres id
  $scope.readNyheder = function() {
    $http.get($rootScope.apiUrl + "/Public/ReadNyhed?id=" + $routeParams.nyhederId)
    .success(function(data)
    {
      if(data.status ==="success")
      {
          $scope.nyhed = data;
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
    $http.post($rootScope.apiUrl + "/Administrator/UpdateNyhed", { Id: $scope.Nyhed.Id, Titel: titel, Tekst: tekst, Forfatter: forfatter })
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
  
  //Gå tilbage til nyhedsoversigten nyhed med id
  $scope.gotoNyheder = function () {
    $location.url("/Nyheder");
  }
  
  $scope.gotoUpdateNyhed = function (nyheder) {
      $location.url($location.url() +"/Update");
  }

}]);