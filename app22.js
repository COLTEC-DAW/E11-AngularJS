var app = angular.module('myApp', []);

app.controller('impostoController', function() {

  this.impostoroubo = function(salario) {
      resultado = parseInt(salario);
      
      if(resultado < 2000){
            return resultado*0.9;
      }
      else if(resultado > 3500){
        return resultado*0.7;
      }
      else return resultado*0.8;
  };

});
