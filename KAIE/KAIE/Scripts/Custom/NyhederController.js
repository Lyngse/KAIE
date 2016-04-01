app.controller('NyhederController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
  $scope.Nyheder = "";
  $scope.nyhedTitel = "";
  $scope.nyhedTekst = "";
  $scope.nyhedForfatter = "";
  
  //Indlæs alle nyheder
  $scope.readAllNyheder = function() {
      $http.get($rootScope.apiUrl + "/Nyheder/ReadAll")
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
  
  //Opret nyhed
  $scope.createNyhed = function(titel, tekst, forfatter) {
    $http.post($rootScope.apiUrl + "/Nyheder/Create", { titel: titel, tekst: tekst, forfatter: forfatter })
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
    $http.post($rootScope.apiUrl + "/Nyheder/Update", { titel: $scope.Nyheder.Titel, tekst: $scope.Nyheder.Tekst, forfatter: $scope.Nyheder.Forfatter })
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
    $http.post($rootScope.apiUrl + "/Nyheder/Delete", { Id: $scope.Nyheder.Id})
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
  
  //Gå til bestemt nyhed med id
  $scope.gotoNyhed = function (nyheder) {
    $location.url("/Nyheder/" + nyheder.Id);
  }
  
  $scope.gotoCreateNyhed = function() {
      $location.url("/CreateNyhed");
  }
  
}]);