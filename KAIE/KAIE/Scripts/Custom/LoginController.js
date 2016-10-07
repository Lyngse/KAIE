app.controller('LoginController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
    $scope.login = function(brugernavn, kodeord) {
        $http.post($rootScope.apiUrl + "/Authentication/login", {brugernavn: brugernavn, kodeord: kodeord})
        .then(function(response) {
            var data = response.data;
            if(data.status === "success")
            {
                console.log("Logged in");
                console.log(data);
                $rootScope.isLoggedIn = true;
                $rootScope.loggedInUserId = data.AdminId;
                $scope.gotoForside();
                $location.path('/');
            }
            else
            {
                console.log(data);
            }
        }, function(data) {
            $scope.deleteErr = data;
        })
    };

    $scope.register = function() {
        $http.post($rootScope.apiUrl + "/Authentication/register", {brugernavn: "admin", kodeord: "admin"})
        .then(function(response) {
            var data = response.data;
            if(data.status === "success")
            {
                console.log("Bruger registered");
                console.log(data);
            }
            else
            {
                console.log(data);
            }
        }, function(data) {
            $scope.deleteErr = data;
        })
    };

    $scope.gotoForside = function() {
       $location.path('/');
    }
}]);