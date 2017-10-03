var app = angular.module('myApp', []);

app.controller('impostoController', function($scope) {

  this.valor = 0.0;

  this.calculaImposto = function(valor) {
    if(valor<2000){
      answer = (valor - ((valor/100)*10));
      $scope.imposto = 10;
    }
    if(valor >= 2000 && valor <= 3500){
      answer = (valor - ((valor/100)*20));
      $scope.imposto = 20;
    }
    if(valor>3500){
      answer = (valor - ((valor/100)*30));
      $scope.imposto = 30;
    }
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

});
