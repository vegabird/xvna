app.controller('eval', ['$scope', '$http', function($scope, $http) {

    $scope.checkUser=function(userid, userid2){
        
        $http.get("/eval?id="+userid+"&id2="+userid2+"")
  .then(function(response) {
      $scope.alldata = response['data'].cmd;
  }, function(response) {
      $scope.content = "Something went wrong";
  });
        
    };
}]);