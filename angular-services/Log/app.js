var app = angular.module('myApp', []);

app.factory('LogService', function() {
  var logService = {};
  
  logService.adicionarLog = function(msg) {
    var data = new Date().toUTCString();
    msg.nivel == "0" ? console.log(data + ' -> ' + msg.mensagem) : console.error(data + ' -> ' + msg.mensagem);
  };
  
  return logService;
});

app.controller('LogController', ['LogService', '$scope', function(logService, $scope) {
  this.nivel;
  this.msg;
  
  function Log(nivel, msg) {
    this.nivel = nivel;
    this.mensagem = msg;
  }
   
  this.adicionarLog = function() {
    logService.adicionarLog(new Log(this.nivel, this.msg));

    this.msg = null;
    this.nivel = null;
  }
}]);