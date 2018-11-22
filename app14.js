var app = angular.module('myApp', []);

app.controller('MultiplicaController', function() {

  this.multiplica = function(numero) {
    resultado = parseInt(numero)*3;
    return resultado;
  };

});
