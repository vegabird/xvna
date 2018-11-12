app.controller('a3_xss_reflected', ['$scope','$http','$sce', function($scope, $http, $sce) {
  
     $scope.checkUser=function(userid){
       
        $http.get("/xss_r?id="+userid+"")
  .then(function(response) {
            $scope.trustedMessage =  $sce.trustAsHtml( response['data'].search );
      $scope.alldata = response['data'].cmd;
  }, function(response) {
      $scope.alldata = "Something went wrong";
  });
        
    };

}]);
