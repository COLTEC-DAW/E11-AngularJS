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
    answer = parseInt(celsius)*1.8+32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };
});


app.controller('ImpostoController', function() {

  this.calcImposto = function(salario) {
    s = parseFloat(salario);
    if(isNaN(s)){
      return 0;
    } else if(s<2000){
      return s*0.1;
    } else if(s<=3500){
      return s*0.2;
    }else{
      return s*0.3;
    }
  }
});


app.controller('ReviewController', function() {
  this.reviewsArray=[];
  this.addComentario = function(review, estrelas){
    var rev = {
      "review": review,
      "estrelas": estrelas
    }
    this.reviewsArray.push(rev);
  }
});

  app.controller('ContactController', function($scope){
    this.contArray=[];
    this.addCont = function(nome, telefone, email){
      var cont = {
        "nome": nome,
        "telefone": telefone,
        "email": email
      }
      this.contArray.push(cont);
    }
    this.rmCont = function(contato){
      index = this.contArray.indexOf(contato);
      this.contArray.splice(index, 1);
    }
   
  });
