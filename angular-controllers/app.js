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
	answer = parseInt(celsius) *1.8+32;
	if (isNaN(answer)) {
	  return 0;
	} else {
	  return  answer;
	}
  };
});

app.controller("impostoController", function(){

  this.salario;

  this.calculaImposto = function(salario){
	answer = parseFloat(salario);
	if (answer < 2000) answer*=0.1;
	else if (answer > 3500) answer*=0.3;
	else answer*=0.2;

	if (isNaN(answer)) return 0;
	else return answer;
  }
});

app.controller("reviewController", function(){
	this.reviews = [];
  
  this.addReview = function(estrelas, comentario){
		newReview = {"estrelas":estrelas, "comentario":comentario};
		this.reviews.push(newReview);
		console.log(this.reviews);
  }

});

app.controller("contactController", function(){
	this.contacts = [];
	i = 0;

	this.addContact = function(nome, email, telefone){
		newContact = {"index": i, "nome":nome, "email":email, "telefone":telefone};
		i++;
		this.contacts.push(newContact);
		console.log(this.contacts);
	}

	this.editContact = function(index, nome, email, telefone){
		this.contacts[index] = {"index":index, "nome":nome, "email":email, "telefone":telefone};
	}

	this.removeContact = function(index){
		this.contacts.splice(index, 1);
		for (i=index; this.contacts[i]!=null; i++) this.contacts[i].index--;
	}
});