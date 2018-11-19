var app = angular.module('myApp', []);
app.controller('TemperaturaController', function() {

  this.celsius = 32.0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;

      if (isNaN(answer)) {
        return 0;
      } else {
        return  answer;

app.service('CtrlTemp', function() {
    this.myFunc = function (celsius) {
        return celsius + 213;
    }
  };
});

app.controller('myCtrl', function($scope, CtrlTemp) {
  $scope.kelvin = CtrlTemp.myFunc(1);
});

  this.celsiusToFahrenheit = function(celsius) {
    answer = parseInt(celsius) * 1.8 + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;

app.service('CtrlTemp2', function() {
    this.myFunc = function (celsius) {
        return celsius * 1.8 + 32;
    }
  };
});

app.controller('myCtrl', function($scope, CtrlTemp2) {
  $scope.fahrenheit = CtrlTemp2.myFunc(1);
});
