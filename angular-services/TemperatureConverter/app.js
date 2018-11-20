var app = angular.module('myApp', []);

app.controller('TemperaturaController', ['TemperaturaService', function(service) {

  this.celsius = 32.0;

  this.ctk = function(celsius) {
    return service.celsiusToKelvin(celsius);
  }
  this.ctf = function(celsius) {
    return service.celsiusToFahrenheit(celsius);
  }
}]);

app.service('TemperaturaService', function() {
  this.celsiusToKelvin = function(celsius) {
    return parseInt(celsius) + 273;
  }
  this.celsiusToFahrenheit = function(celsius) {
    return parseInt(celsius) * 1.8 + 32;
  }
});
