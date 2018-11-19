var app = angular.module('myApp', []);

app.factory('CarrinhoDeComprasService', function() {
  var carrinhoDeComprasService = {};
  carrinhoDeComprasService.itens = [];
  carrinhoDeComprasService.total = 0;
  
  carrinhoDeComprasService.adicionar = function(item) {
    carrinhoDeComprasService.itens.push(item);
    carrinhoDeComprasService.total += item.preco * item.quantidade;
  };
  
  carrinhoDeComprasService.checkout = function() {
    return carrinhoDeComprasService;
  };
  
  return carrinhoDeComprasService;
});

app.controller('ComprasController', ['CarrinhoDeComprasService', '$scope', function(carrinhoDeComprasService, $scope) {
  this.descricao;
  this.preco;
  this.qtd;
  
  function Item(descricao, preco, qtd) {
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = qtd;
  }
   
  this.adicionarItem = function() {
    carrinhoDeComprasService.adicionar(new Item(this.descricao, this.preco, this.qtd));

    this.descricao = null;
    this.preco = null;
    this.qtd = null;
  }
}]);

app.controller('CheckoutController', ['CarrinhoDeComprasService', '$scope', function(carrinhoDeComprasService, $scope) {
  this.carrinho = carrinhoDeComprasService.checkout();
}]);