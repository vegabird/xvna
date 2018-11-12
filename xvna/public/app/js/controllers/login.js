'use strict';
/* Controllers */
// signin controller
app.controller('LoginFormController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
	$scope.user = {};
	$scope.authError = null;
	$scope.login = function () {
		$scope.authError = null;
		var data = {
			email: $scope.user.email
			, password: $scope.user.password
		, };
		$http.post('/api/users', JSON.stringify(data)).then(function (response) {
			var res_value = response.data
			if (response.data) {
				if (res_value == 'true') {
					$state.go('app.dashboard');
				}
				else {
					$scope.authError = 'Email or Password is Incorrect';
				}
			}
		}, function (x) {
			$scope.authError = 'Server Error';
		});
	};
	$scope.check_logout = function () {
		$http.post('/service_logout').then(function (response) {
			if (response.data) {}
		});
	};
	$scope.check_logout()
  }]);