var app = angular.module('myApp', []);

 app.factory('Logger', function() {
    return{
        logger: function(nivel, mensagem){
            if(nivel === 0){
                console.log(mensagem);
            } else {
                console.error(mensagem);
            }
        }
    }
});

app.controller('LogCtrl', ["$scope", 'Logger', function($scope, Logger){
    this.mensagem = "";
    this.erro = "";

    this.funcao = function(aviso, msg){
        Logger.logger(aviso, msg);
    }
}]);