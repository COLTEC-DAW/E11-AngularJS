var app = angular.module('myApp', []);

app.service('logService', function(){

     this.log = function(nivel, mensagem){
        if(nivel == 0){
            console.log(new Date() + " - " + mensagem);
        } else if(nivel == 1){
            console.error(new Date() + " - " + mensagem);
        }
    }
})

app.controller('LogController', ['logService', function(service){
    service.mensagem = "";
    service.nivel = 0;

    this.log = service.log;
}]);
