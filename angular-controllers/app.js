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
    answer = 1.8 * parseInt(celsius) + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return answer;
    }
  };
});

app.controller('ImpostoController', function() {

  this.salario = 0

  this.calculaImposto = function (salario) {
    if(salario >= 3500) {
      return 0.30 * salario
    } else if (salario >= 2000 && salario <= 3500) {
      return 0.2 * salario
    } else if(salario < 2000) {
      return 0.10 * salario
    }
  };
});

app.controller('ReviewController', function() {
  this.stars = 0
  this.commentary = ''
  this.commentaries = []

  this.addComment = function (commentary) {
    if(this.commentaries.indexOf(commentary) === -1) {
      this.commentaries.push(commentary)
    }
  }
});

app.controller('ContactController', function () {
  this.name = '';
  this.phone = '';
  this.email = '';
  this.contacts = [];

  this.verify = function(c){
    for(let i=0; i< this.contacts.length; i++){
      if (this.contacts[i].nome === c.nome && this.contacts[i].telefone === c.telefone && this.contacts[i].email === c.email){
        return i;
      }
    }
    return false;
  }

  this.addContact = function(name, phone, email) {
    var contact = {
      name: name,
      phone: phone,
      email: email
    }

    this.contacts.push(contact)
  }

  this.editContact = function(contact, name, phone, email) {
    var i = this.verify(contact)

    this.contacts[i].name = name
    this.contacts[i].phone = phone
    this.contacts[i].email = email
  }

  this.delete = function (contact) {
    this.contacts.splice(this.verify(contact), 1)
  }

});
