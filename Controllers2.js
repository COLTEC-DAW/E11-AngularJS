app.controller('ImpostoController', function() {
    this.salario = 1000;
     this.imposto = function(salario){
      if(salario < 2000){
        return salario * 0.1;
      }else if(salario < 3500){
        return salario * 0.2;
      }else{ return salario * 0.3; } 
      }
          }
              );