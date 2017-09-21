var app = angular.module('myApp', []);

app.controller('ContactController', function($scope) {

  this.contatos = [];

  this.salvaContato = function(nome, telefone, email) {
    temp = {nome, telefone, email};
    this.contatos.push(temp);
  };

});
