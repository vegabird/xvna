app.controller('a6_misconfigCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.check_accountno = function(message) {
        var insecure_dor_data = {
            accountno: message
        };
        $scope.alldata = '';
        $scope.error = '';

        $http.post("/a6_misconfig", JSON.stringify(insecure_dor_data))
            .then(
                function(response) {
                    $scope.alldata = response["data"][0];
                },
                function(response) {
                    $scope.error = response.data;
                }
            );
    };
}]);