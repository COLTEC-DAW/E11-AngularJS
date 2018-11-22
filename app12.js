var app = angular.module('myApp', []);

app.controller('ConversorController', function() {

  this.DparaR = function(dolar) {
    euros = parseInt(dolar)*4.1;
    return euros;
  };

  this.DparaE = function(dolar) {
    reais = parseInt(dolar)*0.9;
    return reais;
  };

});
