app.controller('a1_inj_ctrl', ['$scope','$http', function($scope, $http) {
  $scope.checkUser=function(userid){
       
        $http.get("/ping?id="+userid+"")
  .then(function(response) {            
      $scope.alldata = response['data'];
  }, function(response) {
      $scope.alldata = "Something went wrong";
  });
        
    };

}]);
