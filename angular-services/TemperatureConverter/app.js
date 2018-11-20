var app = angular.module('myApp', []);
app.factory('TemperaturaService', function() {
  var temperaturaService = {};
  temperaturaService.celsiusToKelvin = function(celsius){
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  temperaturaService.celsiusToFahrenheit = function(celsius){
    answer = parseInt(celsius) * 1.8 + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  return temperaturaService;
});



app.controller('TemperaturaController',['TemperaturaService', '$scope', function(temperaturaService, $scope) {

  $scope.celsius = 32.0;


  (this.calcular = function(){
    $scope.kelvin = temperaturaService.celsiusToKelvin($scope.celsius);
    $scope.fahrenheit = temperaturaService.celsiusToFahrenheit($scope.celsius);
  })();


}]);
