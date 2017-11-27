var app = angular.module('myApp', [])

app.factory('TemperatureService', function () {
  let tempService = {}

  tempService.celsiusToKelvin = (celsius) => {
    answer = parseInt(celsius) + 273.5
    if (isNaN(answer)) {
      return 0
    } else {
      return answer
    }
  }

  tempService.celsiusToFahrenheit = (celsius) => {
    answer = parseInt(celsius) * 1.8 + 32
    if (isNaN(answer)) {
      return 0
    } else {
      return answer
    }
  }

  return tempService
})

app.controller('TemperaturaController', ['TemperatureService', function (tempService) {
  this.celsius = 32.0
  this.tempService = tempService

  this.celsiusToFahrenheit = (celsius) => {
    return this.tempService.celsiusToFahrenheit(this.celsius)
  }

  this.celsiusToKelvin = (celsius) => {
    return this.tempService.celsiusToKelvin(this.celsius)
  }
}])

// app.controller('TemperaturaController', function() {
  // this.celsius = 32.0;

//   this.celsiusToKelvin = function(celsius) {
//     answer = parseInt(celsius) + 273.5;
//     if (isNaN(answer)) {
//       return 0;
//     } else {
//       return  answer;
//     }
//   };

//   this.celsiusToFahrenheit = function(celsius) {
//     answer = parseInt(celsius) * 1.8 + 32;
//     if (isNaN(answer)) {
//       return 0;
//     } else {
//       return  answer;
//     }
//   };

// });
