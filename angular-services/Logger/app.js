var app = angular.module('myApp', []);

app.factory('LogService', function(){
    var log = {};
    log.adicionaLog = function(nivel,msg){
        var data = new Date().toUTCString();
        if(nivel == 0){
            console.log(data + '\n'+ msg);
        }
        else{
            console.error(data + '\n'+ msg);
        }
    }

    return log;
});

app.controller('LogController', function($scope,LogService){
    $scope.nivel;
    $scope.msg;
    $scope.adiciona = function(){
        LogService.adicionaLog($scope.nivel,$scope.msg);
    }
});