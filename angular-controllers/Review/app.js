var app = angular.module('myApp', []);

app.controller('ReviewController', ['$scope', function($scope){
    $scope.reviewAtual = "Faça review";
    $scope.estrelasAtual = 0;
    $scope.reviews = [];

    $scope.addReview = function($rev, $estr){
        $scope.reviews.push({review: $rev, estrela: $estr});
    }
}]);