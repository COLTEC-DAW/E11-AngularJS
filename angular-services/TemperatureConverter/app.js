
var app = angular.module('myApp', []);

app.service('CtrlTemp', function() {
    this.myFunc = function (celsius) {
        return celsius + 213;
    }
});
app.controller('myCtrl', function($scope, CtrlTemp) {
  $scope.kelvin = CtrlTemp.myFunc(1);
});

app.service('CtrlTemp2', function() {
    this.myFunc = function (celsius) {
        return celsius * 1.8 + 32;
    }
});
app.controller('myCtrl', function($scope, CtrlTemp2) {
  $scope.fahrenheit = CtrlTemp2.myFunc(1);
});