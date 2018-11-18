var app = angular.module('myApp', []);

app.service('logService', function(){
    var logService = {};
     logService.printLog = function(nivel, mensagem){
        if(nivel == 0){
            console.log(new Date() + ": " + mensagem);
        } else if(nivel==1){
            console.error(new Date() + ": " + mensagem);
        }
    }
     return logService;
})
app.controller('LogController', ['$scope', 'logService', function($scope, LC){
    $scope.LC = LC;
    $scope.mensagem = "";
    $scope.tipo = null;
}]); 