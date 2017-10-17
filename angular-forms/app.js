var app = angular.module('ClientesApp', []);

app.controller('ClientesController', function() {
  this.nome = "";
  this.CPF = "";
  this.telefone = "";
  this.endereco = "";
  this.email = "";

}).directive("validaCpf", function(){
  this.TestaCPF = function TestaCPF(strCPF) {
      var Soma;
      var Resto;
      Soma = 0;
      strCPF = strCPF.toString();
    if (strCPF == "00000000000") return false;
      
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
    
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
    Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
    
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
      return true;
    };
    return{
      require: "ngModel",
      link: function(scope, elm, attrs, ctrl){
        ctrl.$validators.myValidator = function(value){
          return TestaCPF(value);
        }
      }
    }
  })