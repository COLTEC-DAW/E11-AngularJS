var app = angular.module('FuncionariosApp', []);

app.controller('FuncionariosController', function() {
  this.employees = [
    {
      name: "João",
      cpf: 11122233344,
      email: "joao@j.com",
      phone: 3132453499,
      salary: 100000
    },
    {
      name: "Pedro",
      cpf: 12312345699,
      email: "pedro@p.com",
      phone: 2731458976,
      salary: 8600
    },
    {
      name: "Paula",
      cpf: 12300012311,
      email: "paula@p.com",
      phone: 4134568900,
      salary: 4550
    },
    {
      name: "Ana",
      cpf: 08007611134,
      email: "ana@a.com",
      phone: 2125366556,
      salary: 5500
    },
    {
      name: "Gustavo",
      cpf: 22244466688,
      email: "Gustavo Augusto",
      phone: 1125268441,
      salary: 15000
    },
    {
      name: "Marques",
      cpf: 45465689812,
      email: "marques@m.com",
      phone: 8899009900,
      salary: 56000
    },
    {
      name: "Matheus",
      cpf: 07689155189,
      email: "matheus@m.com",
      phone: 5789550046,
      salary: 3700
    },
    {
      name: "Clara",
      cpf: 06587921125,
      email: "mariaclara@maria.com",
      phone: 3125168998,
      salary: 5800
    },
    {
      name: "Claudio",
      cpf: 45378699900,
      email: "claudio@claudio.com",
      phone: 1225651398,
      salary: 1500
    }
  ];

});
