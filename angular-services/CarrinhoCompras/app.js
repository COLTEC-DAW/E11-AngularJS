var app = angular.module('myApp', ["carrinhoService"]);

app.controller('ComprasController', ["$scope", "carrinhoService", function($scope, carrinhoService) {
	console.log("CONTROLLER 1");
	this.produtos = [
		{
			nome: "Sabão",
			preco: 5
		},
		{
			nome: "Creme Dental",
			preco: 10
		},
		{
			nome: "Detergente",
			preco: 4
		}
	];

	this.poeNoCarrinho = function (coisa) {
		carrinhoService.novaCoisa(coisa);
	};
}])

app.controller("CheckoutController", ["$scope", "carrinhoService", function($scope, carrinhoService){
	console.log("CONTROLLER 2");
	this.compras = carrinhoService.compras;
	this.total = function(){
		return carrinhoService.somaTudo()
	};
	this.tiraDoCarrinho = function (coisa) {
		carrinhoService.tiraCoisa(coisa);
	};
}]);