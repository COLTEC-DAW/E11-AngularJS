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

app.filter('cpf', () => {
  return (text) => {
    let cpf = text.toString()
    
    // percebi que a linha acima retirava os zeros que estavam no inicio do cpf
    // a função abaixo é pura e recursiva
    // se o cpf tiver 11 caracteres, é pq ta OK, e então a string original é retornada
    // senão, está faltando 0s no início
    // então, ela chama ela mesma com a mesma string só que com um 0 no início
    // e faz isso até que tenha 11 caracteres, então a string com zeros é retornada
    // baseado no exemplo de fact funcional escrito aqui: https://github.com/haskellcamargo/js-real-world-functional-programming#do-1
    const zerosNoInicio = CPF => CPF.length === 11
      ? CPF
      : zerosNoInicio(`0${CPF}`)

    let cpfCorrigido = zerosNoInicio(cpf)

    let cpfDividido = cpfCorrigido.match(/.{1,3}/g)
    return `${cpfDividido[0]}.${cpfDividido[1]}.${cpfDividido[2]}-${cpfDividido[3]}`
  }
})

app.filter('telefone', () => {
  return (text) => {
    let telefone = text.toString()
    let codigoDeArea = telefone.substring(0, 2)
    let antesDoTraco = telefone.substring(2, 6)
    let depoisDoTraco = telefone.substring(6, 10)
    return `(${codigoDeArea})${antesDoTraco}-${depoisDoTraco}`
  }
})