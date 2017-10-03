var app = angular.module('formExample', []);

app.controller('ExampleController', ['$scope', function($scope) {
  this.master = {};

  this.update = function(user) {
    this.master = angular.copy(user);
  };

  this.reset = function() {
    $scope.user = {};
  };

  this.reset();
}]);


app.directive('majorAge', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.majorAge = function(modelValue, viewValue) {
        
        if (ctrl.$isEmpty(modelValue)) {
          return false;
        }

        if(modelValue == "/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/"){
            return true;
        }
      };
    }
  };
});
