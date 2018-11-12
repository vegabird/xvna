app.controller('a4_xxe', ['$scope', '$http', function($scope, $http) {
    
   
    
    $scope.checkUser=function(userid){
        
        $http.get("/a4xxe?id="+userid+"")
  .then(function(response) {
      $scope.alldata = response['data'].cmd;
  }, function(response) {
      $scope.content = "Something went wrong";
  });
        
    };
    
}]);
