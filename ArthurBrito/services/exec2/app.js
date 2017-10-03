var app = angular.module('myApp', []);

app.factory('CarrinhoDeCompras', function(){
	var ComprasService = {};
	ComprasService.compras = [];
	
	ComprasService.adicionaitens = function(descricao, preco, quantidade){
		var temp = {descricao, preco, quantidade};
		ComprasService.compras.push(temp);		
	}

	ComprasService.exibeitens = function() {
		return ComprasService.compras;
	};

	return ComprasService;
});

app.controller('ControllerAdiciona', ['CarrinhoDeCompras', function(ComprasService) {

	this.adicionar = function(descricao, preco, quantidade){
		ComprasService.adicionaitens(descricao, preco, quantidade);
	}

}]);

app.controller('ControllerExibe', ['CarrinhoDeCompras', function(ComprasService) {
	this.vetor = ComprasService.exibeitens();
}]);