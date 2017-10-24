var app = angular.module('myApp', ["logService"]);

app.controller('LoggerController', ["$scope", "logService", function($scope, logService) {
	this.log = function (nivel, mensagem) {
		logService.log(nivel, mensagem);
	};
}]);