app.controller('ForsideController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', '$window', '$mdBottomSheet', '$mdToast', '$timeout', function ($scope, $http, $location, $rootScope, $routeParams, $window, $mdBottomSheet, $mdToast, $timeout) {
  this.currentNavItem = "Forside";

  $scope.alert = '';
  $scope.showGridBottomSheet = function () {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'Templates/bottom-sheet-list-template.html',
      controller: 'ForsideController',
      clickOutsideToClose: true
    }).then(function (clickedItem) {
      $mdToast.show(
        $mdToast.simple()
        .textContent('Hello!')
        .position('top right')
        .hideDelay(1500)
      );
    });
  }

  $scope.listItemClick = function ($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };

  $scope.gotoNyheder = function() {
    $location.path('/Administrator/NyhedsGrid');
    $mdBottomSheet.hide();
  }
  
  $scope.gotoGalleri = function() {
    $location.path('/Administrator/Galleri');
    $mdBottomSheet.hide();
  }
  
}]);