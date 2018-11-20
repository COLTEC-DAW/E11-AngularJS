var app = angular.module('myApp', []);

app.factory('TemperaturaService', function() {

  let service = {};
  
  service.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  service.celsiusToFahrenheit = function(celsius) {
    answer = parseInt(celsius) * 1.8 + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  return service;
});

app.controller('TemperaturaController', ['TemperaturaService' , function(service) {

  this.celsius = 32.0;
  this.service = service;

  this.getKelvin = function(celsius){
    return this.service.celsiusToKelvin(celsius);
  }

  this.getFahrenheit = function(celsius){
    return this.service.celsiusToFahrenheit(celsius);
  }

}]);
