app.controller('AdministratorController', ['$scope', '$http', '$location', '$rootScope', '$routeParams', function ($scope, $http, $location, $rootScope, $routeParams) {
  $(document).ready(function() {
    $(".fancybox").fancybox({
      openEffect	: 'none',
      closeEffect	: 'none'
    });
  });
  
  $scope.imgs = [
    {image: "Images/Udlejning/ul1.jpg"},
    {image: "Images/Udlejning/ul2.jpg"},
    {image: "Images/Udlejning/ul3.jpg"},
    {image: "Images/Udlejning/ul4.jpg"},
    {image: "Images/Udlejning/ul5.jpg"},
    {image: "Images/Udlejning/ul6.jpg"},
    {image: "Images/Udlejning/ul7.jpg"},
    {image: "Images/Udlejning/ul8.jpg"},
    {image: "Images/Udlejning/ul9.jpg"},
    {image: "Images/Udlejning/ul10.jpg"},
    {image: "Images/Udlejning/ul11.jpg"},
    {image: "Images/Udlejning/ul12.jpg"},
    {image: "Images/Udlejning/ul13.jpg"},
    {image: "Images/Udlejning/ul14.jpg"},
    {image: "Images/Udlejning/ul15.jpg"},
    {image: "Images/Udlejning/ul16.jpg"},
    {image: "Images/Udlejning/ul17.jpg"},
    {image: "Images/Udlejning/ul18.jpg"},
    {image: "Images/Udlejning/ul19.jpg"},
    {image: "Images/Udlejning/ul20.jpg"},
    {image: "Images/Udlejning/ul21.jpg"},
    {image: "Images/Udlejning/ul22.jpg"},
    {image: "Images/Udlejning/ul23.jpg"},
    {image: "Images/Udlejning/ul24.jpg"},
    {image: "Images/Udlejning/ul25.jpg"},
    {image: "Images/Udlejning/ul26.jpg"},
    {image: "Images/Udlejning/ul27.jpg"},
    {image: "Images/Udlejning/ul28.jpg"},
    {image: "Images/Udlejning/ul29.jpg"},
    {image: "Images/Udlejning/ul30.jpg"},
    {image: "Images/Udlejning/ul31.jpg"},
    {image: "Images/Udlejning/ul32.jpg"},
    {image: "Images/Udlejning/ul33.jpg"},
    {image: "Images/Udlejning/ul34.jpg"},
    {image: "Images/Udlejning/ul35.jpg"},
    {image: "Images/Udlejning/ul36.jpg"},
    {image: "Images/Udlejning/ul37.jpg"},
    {image: "Images/Udlejning/ul38.jpg"},
    {image: "Images/Udlejning/ul39.jpg"},
    {image: "Images/Udlejning/ul40.jpg"},
    {image: "Images/Udlejning/ul41.jpg"},
    {image: "Images/Udlejning/ul42.jpg"},
    {image: "Images/Udlejning/ul43.jpg"},
    {image: "Images/Udlejning/ul44.jpg"},
    {image: "Images/Udlejning/ul45.jpg"},
    {image: "Images/Udlejning/ul46.jpg"},
    {image: "Images/Udlejning/ul47.jpg"},
    {image: "Images/Udlejning/ul48.jpg"},
    {image: "Images/Udlejning/ul49.jpg"},
    {image: "Images/Udlejning/ul50.jpg"},
  ];
  
  $scope.files = []; 
  $scope.uploadImages = function(){
    alert($scope.files.length+" files selected ... Write your Upload Code"); 
  };
  
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
  