app.controller('a5_insecure_dor', ['$scope', '$http', function($scope, $http) {

    $scope.check_accountno = function(message) {
        var insecure_dor_data = {
            accountno: message
        };

        $http.post("/insecure_dor", JSON.stringify(insecure_dor_data))
            .then(
                function(response) {
                    $scope.alldata = response["data"][0];
                },
                function(response) {
                    console.log("client failure")
                }
            );
    };
}]);