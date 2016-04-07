app.controller('RandomController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
    
    $scope.sendEmail = function(email) {
        $http.post($rootScope.apiUrl + "/Email/SendEmail", {Fornavn: email.fornavn, Efternavn:  email.efternavn, Email: email, Emne:  email.emne, Besked:  email.besked})
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
        })
    }
    
    
    
}]);