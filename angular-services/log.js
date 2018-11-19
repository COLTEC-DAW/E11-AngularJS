var app = angular.module('myApp', []);

app.service('logService', function(){
    var logService = {};

     logService.printLog = function(level, mensagem){

        if(level == 0){
            console.log(new Date() + ": " + mensagem);
        } else if(level==1){
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
