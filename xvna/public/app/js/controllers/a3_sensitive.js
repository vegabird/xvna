app.controller('a3_sensitive', ['$scope', '$http', function($scope, $http) {
    
   
    
    $scope.checkUser=function(userid){
        
        $http.get("/a3sensitive?id="+userid+"")
  .then(function(response) {
      $scope.alldata = response['data'].cmd;
  }, function(response) {
      $scope.content = "Something went wrong";
  });
        
    };
    
}]);
