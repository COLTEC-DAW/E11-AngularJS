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

  this.celsiusToFahrenheit = function(celsius){
    answer = (parseInt(celsius)*(9/5))+32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  }

});

app.controller('SalarioController', function(){
  
  this.salario = 1000;

  this.calculaImposto = function(salario){
    if(salario<2000){
      return salario * 0.1;
    } else if(salario >= 2000 && salario <3500){
      return salario * 0.2;
    } else{
      return salario * 0.3;
    }
  }
});

app.controller('reviewController', function(){
  
  this.rating = 0;
  this.comentario = "";
  this.reviews = [];

  this.addReview = function(rating, comentario){
    this.rating = 0;
    this.comentario = "";
    this.reviews.push({
      rating,
      comentario
    });
  }

});

app.controller('contactController', function(){
  
  this.nome = "";
  this.telefone = "";
  this.email = "";
  this.contatos = [];
  this.id = 1;

  this.addContato = function(nome, telefone, email){
    this.id = this.id + 1;
    this.contatos.push({
      id:this.id,
      nome,
      telefone,
      email
    });
    this.nome = "";
    this.telefone = "";
    this.email = "";
  }

  this.removeContato = function(id){
    let buffer = [];
    this.contatos.forEach(contato => {
      if(contato.id !== id){
        buffer.push(contato);
      }
    });
    this.contatos = buffer;
  }

  this.editaContato = function(id){
    let contato = undefined;
    for(c of this.contatos){
      if(c.id === id){
        contato = c;
      }
    }
    this.removeContato(id);
    this.nome = contato.nome;
    this.email = contato.email;
    this.telefone = contato.telefone;
  }

});