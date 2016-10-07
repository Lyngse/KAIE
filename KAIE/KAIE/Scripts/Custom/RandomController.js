app.controller('RandomController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
    
    $scope.sendEmail = function(fornavn, efternavn, email, emne, besked) {
        $http.post($rootScope.apiUrl + "/Email/SendEmail", {Fornavn: fornavn, Efternavn: efternavn, Email: email, Emne:  emne, Besked:  besked})
        .success(function() {
            if(data.status === "success")
            {
                console.log("Email sendt");
            }
            else
            {
                $scope.error = "Emailen kunne ikke sendes";
                console.log("Emailen kunne ikke sendes");
            }
        }).error(function(err) {
            $scope.sendEmailErr = err;
            console.log(err);
        })
    }
    
    
    
    
}]);