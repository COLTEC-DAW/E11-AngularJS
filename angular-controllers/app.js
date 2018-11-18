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


  // Exercicio 1
  this.celsiusToFahrenheit = function(celsius){
    answer = (parseInt(celsius) * 9/5) + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  }

});

//Exercicio 2
app.controller('ImpostoController', function() {
  this.salario = 937; // Salário mínimo

  this.imposto = function(salario){
    if(salario < 2000){
      return salario * 0.1;
    }else if(salario < 3500){
      return salario * 0.2;
    }else{
      return salario * 0.3;
    }
  }
});

//Exercicio 3
app.controller('ReviewController', function(){
  this.avaliacao = 5;
  this.comentario = '';
  this.comentarios = [];

  this.addComment = function(comentario){
    if (this.comentarios.indexOf(comentario) == -1 ){
      this.comentarios.push(comentario);
    }
  }
});

//Exercicio 4
app.controller('ContactController', function(){
  this.nome = '';
  this.phone = '';
  this.email = '';
  this.contatos = [];

  this.verify = function(c){
    for(let i=0; i< this.contatos.length; i++){
      if (this.contatos[i].nome == c.nome && this.contatos[i].telefone == c.telefone && this.contatos[i].email == c.email){
        return i;
      }
    }
    return false;
  }

  this.create = function(nome, telefone, email){
    var contato = {nome: nome, telefone: telefone, email: email};
    if (this.verify(contato)){
      this.contatos.push(contato);
    }
  }

  this.update = function (contato, nome, telefone, email){
    var i = this.verify(contato);
    this.contatos[i].nome = nome;
    this.contatos[i].telefone = telefone;
    this.contatos[i].email = email;
  }

  this.delete = function(contato){
    this.contatos.splice(this.verify(contato), 1);
  }
});
