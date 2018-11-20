var app = angular.module('myApp', []);

app.controller('reviewController', function() {
  $scope.reviewew = "Faça review";
  $scope.estrelass = 0;
  $scope.reviews = [];
  this.adicionarReview = function(){
        // $scope.reviews.push({review: $rev, estrelas: $est});
  };
});
