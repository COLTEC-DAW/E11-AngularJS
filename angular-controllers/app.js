var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {

  this.celsius = 32.0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  this.celsiusToFahrenheit = function(celsius){
    answer = parseInt(celsius)*1.8+32;
    if (isNaN(answer)){
      return 0;
    } else {
      return answer;
    }
  }

});

app.controller('ImpostoController', function(){
  this.salario = 0.0;

  this.calculaImposto = function(salario){
    answer = parseInt(salario);

    if(salario < 2000){
      answer = salario * 0.1;
    } else if(salario > 3500){
      answer = salario * 0.3;
    } else {
      answer = salario * 0.2;
    }
    if(isNaN(answer)){
      return 0;
    } else {
      return answer;
    }
  }
});

app.controller('reviewController', function(){
  
});

app.controller('ContactController', function(){

});
