var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {

  this.celsius = 0.0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  this.celsiusTofahrenheit = function(celsius) {
    answer2 = parseInt(celsius) * 1.8 + 32.0;;
    if (isNaN(answer2)) {
      return 0;
    } else {
      return  answer2;
    }
  };

})

app.controller('ImpostoController', function(){
  
  this.salario = 0.0;

   this.calculaImposto = function(salario){
    if(isNaN(salario)){
      return 0;
    }
    else{

      imposto = 0;

      if(salario < 2000){
        imposto = salario * 0.1;
      } else if(salario >= 2000 && salario <= 3500){
        imposto = salario * 0.2;
      } else{
        imposto = salario * 0.3;
      }
      return imposto;
    }
  }
}); 