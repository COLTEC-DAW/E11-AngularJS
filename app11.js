var app = angular.module('myApp', []);

app.controller('ConversorController', function() {

  this.CparaK = function(tcelsius) {
    tkelvin = parseInt(tcelsius)+273;
    return tkelvin;
  };

  this.CparaF = function(tcelsius) {
    tfahrenheit = (parseInt(tcelsius)*1.8)+32;
    return tfahrenheit;
  };

});
