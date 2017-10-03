var app = angular.module('myApp', []);

app.factory('LogService', function(){
	var LogService = {};
	
	LogService.informacao = function(nivel, mensagem){
		if(nivel == 1){
			console.log(new Date().toUTCString() + mensagem);
		}
		else if(nivel ==0){
			console.error(new Date().toUTCString() + mensagem);
		}
	}

	return LogService;
});

app.controller('ControllerExibe', ['LogService', function(LogService) {
	this.inf = function(nivel, mensagem){
		LogService.informacao(nivel, mensagem);
	}
}]);