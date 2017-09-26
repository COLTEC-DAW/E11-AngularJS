var app = angular.module('myApp', []);

app.factory('ConversorTemperatura', function(){
  var tempService = {};

  tempService.temps = ['K', 'C', 'F'];

  tempService.celsiusToKelvin = function(celsius){
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  tempService.celsiusToFahrenheit = function(celsius) {
    answer = parseInt(celsius) * 1.8 + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };
  return tempService;
});

app.controller('TemperaturaController', ['ConversorTemperatura', function(conversor) {

  this.celsius = 32.0;
  this.conversor = conversor;
  this.kelvin = function(celsius){
    return conversor.celsiusToKelvin(celsius);
  }
  this.fahrenheit = function(celsius){
    return conversor.celsiusToFahrenheit(celsius);
  }
}]);
