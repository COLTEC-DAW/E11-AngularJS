var app = angular.module('myApp', []);

app.controller('reviewController', function($scope) {

  this.comentarios = [];

  this.salvaComentarios = function(nota, comentarios) {
    temp = {nota, comentarios};
    this.comentarios.push(temp);
  };



});
