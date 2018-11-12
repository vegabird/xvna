app.controller('a3_sensitive_header', ['$scope', '$http','$state', function ($scope, $http,$state) {
	$scope.value = ""
    	$scope.check_login = function () {
    		$http.post('/service_login').then(function (response) {                
    			if (response.data) {
    				if (response.data == 'invalid') {
						
    					$state.go('access.login');
    				}
    			}
    		});
    	};
    	$scope.check_login()
	$scope.checkUser = function () {
		$http.get('/a3sensitive_header').then(function (response) {
			$scope.res_value = response.headers()
		}, function (x) {
			$scope.authError = 'Server Error';
		});
	};
	$scope.checkUser()
}]);