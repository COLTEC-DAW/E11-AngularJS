var app = angular.module('myApp', []);

app.controller('impostoController', function() {

  this.salario = 2500;

  this.calculaImposto = function(salario) {
    if(salario < 2000){
      return salario*1/10;
    } else if (salario>=2000&&salario<=3500) {
      return salario*2/10;
    } else {
      return salario*3/10;
    }
    if (isNaN(salario)) {
      return 0;
    } else {
      return  answer;
    }
  };


});
