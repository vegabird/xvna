app.controller('a1_injection_sql', ['$scope', '$http', function($scope, $http) {
    
   
    
    $scope.checkUser=function(userid){
        
        $http.get("/getdata?id="+userid+"")
  .then(function(response) {
      $scope.alldata = response['data'].cmd;
  }, function(response) {
      $scope.content = "Something went wrong";
  });
        
    };
    
}]);
