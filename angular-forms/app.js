var app = angular.module('myApp', []);

app.controller('FormController', ['$scope', function($scope){
  $scope.master = [];

  $scope.update = function(user) {
    $scope.master.push(angular.copy(user));
    console.log($scope.master);
  };
}]);
