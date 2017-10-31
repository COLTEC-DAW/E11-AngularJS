var app = angular.module('myApp', []);

app.service('temperaturaService', function(){
    this.celsius = 32.0;
    
    this.celsiusToKelvin = function(celsius) {
      answer = parseInt(celsius) + 273.5;
      if (isNaN(answer)) {
        return 0;
      } else {
        return  answer;
      }
    };
  
    this.celsiusToFahrenheit = function(celsius) {
      answer = parseInt(celsius) * 1.8 + 32;
      if (isNaN(answer)) {
        return 0;
      } else {
        return  answer;
      }
    }; 
});
app.controller('TemperaturaController', function(temperaturaService, $scope) {
  $scope.celsius = 32.0;
  $scope.celsiusToKelvin = temperaturaService.celsiusToKelvin($scope.celsius);
  $scope.celsiusToFahrenheit = temperaturaService.celsiusToFahrenheit($scope.celsius);

  $scope.calcula = function(){
    $scope.celsiusToKelvin = temperaturaService.celsiusToKelvin($scope.celsius);
    $scope.celsiusToFahrenheit = temperaturaService.celsiusToFahrenheit($scope.celsius);
  }
});
