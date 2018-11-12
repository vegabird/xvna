    'use strict';
    
    app.config(function (ChartJsProvider) {
    
    	ChartJsProvider.setOptions({
    		colours: ['#FF6E40', '#FBC02E', '#673AB7', '#66bd78', '#f05050']
    		, responsive: true
    	});
    	
    	ChartJsProvider.setOptions('Doughnut', {
    		animateScale: true
    	});
    });

    app.controller('DashboardBarCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    	
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
    }]);


