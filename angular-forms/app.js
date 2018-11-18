var app = angular.module('myApp', []);

app.controller('FormController', ['$scope', function($scope){
    $scope.dados = [];
    $scope.update = function(user) {
        $scope.dados.push(angular.copy(user));
        console.log($scope.dados);
    };  
}]);