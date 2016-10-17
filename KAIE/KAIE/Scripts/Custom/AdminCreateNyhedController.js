app.controller('AdminCreateNyhedController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
   //Opret nyhed
  $scope.createNyhed = function(titel, tekst, forfatter) {
    $http.post($rootScope.apiUrl + "/Administrator/CreateNyhed", { titel: titel, tekst: tekst, forfatter: forfatter })
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