var app = angular.module('myApp', [])

app.factory('LogService', function () {
  return {
    log: (nivel, mensagem) => {
      switch (nivel) {
        case 0:
          console.log(new Date().toLocaleTimeString())
          console.log(mensagem)
          break
        case 1:
          console.error(new Date().toLocaleTimeString())
          console.error(mensagem)
          break
        default:
          console.error(new Date().toLocaleTimeString())
          console.error('Nível n especificado')
      }
    }
  }
})

app.controller('LogTest', ['LogService', function (dev) {
  dev.log(0, 'Aviso')
  dev.log(1, 'Erro')
  dev.log(2, 'Nada')
}])
