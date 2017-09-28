var app = angular.module('myApp', ["somaService"]);

app.controller('ComprasController', ["$scope", "carrinhoService", function($scope , carrinhoService) {
	console.log("CONTROLLER 1");
  this.compras = [];

	this.poeNoCarrinho = function (coisa) {
		console.log("comprando");
		compras.push(coisa);
	};
}])

app.controller("CheckoutController", ["$scope", function($scope){
	console.log("CONTROLLER 2");
	this.precoTotal = 0;

	this.novaCoisa = function(preco) {
		this.precoTotal += preco;
	}
	this.tiraCoisa = function(preco) {
		this.precoTotal -= preco;
	}
}]);