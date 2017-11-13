var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {
  this.celsius = 32.0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return answer;
    }
  }
  this.celsiusToFahrenheit = function(celsius) {
    answer = parseInt(celsius) * 1.8 + 32.0;
    if (isNaN(answer)) {
      return 0;
    } else {
      return answer;
    }
  }
});

app.controller('ImpostoController', function() {
  this.salary =  3000;

  this.calculateTax = function(salary){
    if(salary<2000) return salary*0.1;
    else if(salary>=2000 && salary<=3500) return salary*0.2;
    else return salary*0.3;
  }
});

app.controller('ReviewController', function(){
  this.stars = 0;
  this.comment;
  this.reviews = [];

  this.postReview = function(stars, comment, reviews){
    this.review = {
      stars: this.stars,
      comment: this.comment
    };

    console.log("asdasd");

    this.reviews.push(this.review);

    this.stars = null;
    this.comment = null;
  }
});

app.controller('ContactController', ['$scope', function($scope){
  $scope.contact ={
    nome : null,
    telefone : null,
    email : null
  }
  $scope.contactList = [];

  $scope.i = null;
  $scope.textoBotao = "Adicionar contacto";

  $scope.saveContact = function(){
    if($scope.textoBotao == "Adicionar contacto") $scope.contactList.push($scope.contact);
    else{
     $scope.textoBotao = "Adicionar contacto";
    }
    $scope.contact = {
      nome : null,
      telefone : null,
      email : null
    }
  }

  $scope.editContact = function(x){
    $scope.textoBotao = "Salvar edição";
    $scope.contact = x;
    $scope.i = contactList.indexOf($scope.contact);
  }

  $scope.removeContact = function(x){
    $scope.contactList.splice(x, 1);
  }
}]);