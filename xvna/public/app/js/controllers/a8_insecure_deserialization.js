app.controller('a8_insecure_deserialization_ctrl', ['$scope','$http', function ($scope,$http) {
	$scope.checkUser = function (userid) {
		var data = {userid : userid}
		$http.post('/insecure_deserialization', data).then(function (response) {
			$scope.alldata = response.data.cmd;
		}, function (x) {
			$scope.authError = 'Server Error';
		});
	};
}]);

