var app = angular.module('myApp', []);

 app.factory('TemperaturaService', function() {
  return{
    celsiusToKelvin : function(celsius) {
      answer = parseInt(celsius) + 273.5;
      if (isNaN(answer)) {
        return 0;
      } else {
        return  answer;
      }
    },

    celsiusToFahrenheit : function(celsius) {
      answer = parseInt(celsius) * 1.8 + 32;
      if (isNaN(answer)) {
        return 0;
      } else {
        return  answer;
      }
    }
  }

});

app.controller('TemperaturaController', ["$scope", 'TemperaturaService', function($scope, TemperaturaService){
  
  $scope.Fahrenheit = 0;
  $scope.Kelvin = 0;

  this.muda = function(){
    $scope.Fahrenheit = TemperaturaService.celsiusToFahrenheit(parseInt(this.celsius));
    $scope.Kelvin = TemperaturaService.celsiusToKelvin(parseInt(this.celsius));
  }

}]);
