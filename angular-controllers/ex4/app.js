var app = angular.module('myApp', []);

app.controller('contactController', function() {

  this.salario = 2500;

  this.calculaImposto = function(salario) {
    if(salario < 2000){
      return "10%";
    } else if (salario>=2000&&salario<=3500) {
      return "20%";
    } else {
      return "30%";
    }
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };


});
