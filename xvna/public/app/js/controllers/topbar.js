app.controller('MessagesDropDownCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/messages.json').then(function(response) {
      $scope.messages = response.data;
    });
  }]);



app.controller('NotificationsDropDownCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/notifications.json').then(function(response) {
      $scope.notifications = response.data;
    });
  }]);