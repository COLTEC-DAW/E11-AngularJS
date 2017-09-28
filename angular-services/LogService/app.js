var app = angular.module('myApp', []);

app.factory('LogService', function(){
  return {
    addLog: function(log){
      if(log.lvl == 0){
        console.log(log.msg);
      }
      else{
        console.error(log.msg);
      }
    }
  };
});

app.controller('LogController', ['$scope', 'LogService', function($scope, LogService){
  $scope.log = {
    lvl: "0",
    msg: null
  }

  $scope.addLog = function(log){
    var logCopia = JSON.parse(JSON.stringify(log));
    LogService.addLog(log);
  }
}]);
