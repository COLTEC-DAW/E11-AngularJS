var app = angular.module('FuncionariosApp', []);
 app.controller('FuncionariosController', function() {
app.controller('FuncionariosController', ['formataCpfFilter', 'formataTelFilter', function(formataCpf, formataTel) {
   this.employees = [ { } ];
   this.employees.forEach(function(employee){
    employee.cpf = formataCpf(employee.cpf.toString());
    });
   this.employees.forEach(function(employee){
    employee.phone = formataTel(employee.phone.toString());
    });
  }  
    ]
       ); 
          }
             )
