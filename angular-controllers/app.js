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

  this.celsiusToFahrenheit = function(celsius) {
    answer = (parseInt(celsius) * 9)/5 + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

});

app.controller('ImpostoController', function() {

  this.salario = 0;

  this.calculaImposto = function(salario) {
    salario = parseInt(salario);
    if(isNaN(salario)) {
      return 0;
    } else if(salario < 2000){
      answer = salario * 0.1;
    } else if(salario < 3500) {
      answer = salario * 0.2;
    } else {
      answer = salario * 0.3;
    }
    return answer;
  }
});

app.controller('ReviewController', function() {

  this.comentario = "";
  this.stars = 1;
  this.comentarios = [];

  this.adicionarNaLista = function(comentario) {
    this.comentarios.push(comentario);
  }

});

app.controller('ContactController', function(){
  this.nome = '';
  this.telefone = '';
  this.email = '';
  this.contatos = [];

  this.getContato = function(contato){
    for(let i = 0; i < this.contatos.length; i++){
      if (this.contatos[i].nome == contato.nome && this.contatos[i].telefone == contato.telefone && this.contatos[i].email == contato.email){
        return i;
      }
    }
    return false;
  }

  this.addContato = function(nome, telefone, email){
    var contato = {nome: nome, telefone: telefone, email: email};
    if (this.getContato(contato) == false){
      this.contatos.push(contato);
    }
  }

  this.editContato = function (contato, nome, telefone, email){
    var i = this.getContato(contato);
    this.contatos[i].nome = nome;
    this.contatos[i].telefone = telefone;
    this.contatos[i].email = email;
  }

  this.removeContato = function(contato){
    this.contatos.splice(this.getContato(contato), 1);
  }
});
