var app = angular.module('myApp', []);
 app.controller('reviewController', ['$scope', function($scope){
    $scope.reviewL = "";
    $scope.estrelasL = 0;
    $scope.reviews = [];
     $scope.add = function($rev, $est){
        $scope.reviews.push({review: $rev, estrela: $est});
    }
}]); 