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
    answer = parseInt(celsius)*1.8+32;
    if (isNaN(answer)){
      return 0;
    } else {
      return answer;
    }
  }

});

app.controller('ImpostoController', function(){
  this.salario = 0.0;

  this.calculaImposto = function(salario){
    answer = parseInt(salario);

    if(salario < 2000){
      answer = salario * 0.1;
    } else if(salario > 3500){
      answer = salario * 0.3;
    } else {
      answer = salario * 0.2;
    }
    if(isNaN(answer)){
      return 0;
    } else {
      return answer;
    }
  }
});

app.controller('reviewController', function(){

  this.comentario = "";
  this.estrelas = 1;
  this.all = [];

  this.addInfo = function(comentario, estrelas){
    this.all.push({
      comentario: comentario,
      estrelas: estrelas.toString()
    });
  };
});

app.controller('ContactController', function(){

  this.nome = "";
  this.telefone = "";
  this.email = "";
  this.contatos = [];

  this.add = function(nome, telefone, email){
    this.contatos.push({
      nome: nome,
      telefone: telefone,
      email: email
    });
  };

  this.edit = function(contato){
    var new_name = prompt("Digite o novo nome:", contato.nome);
    var new_telefone = prompt("Digite o novo telefone:", contato.telefone);
    var new_email = prompt("Digite o novo email:", contato.email);

    contato.nome = new_name;
    contato.telefone = new_telefone;
    contato.email = new_email;
    
  };  

  this.deleta = function(contato){
    this.contatos.splice(this.contatos.indexOf(contato), 1);
  };

});
