var app = angular.module('myApp', []);
app.factory('CarrinhoDeCompras', function() {
  var carrinhoDeCompras = {};
  carrinhoDeCompras.lista = [];
  carrinhoDeCompras.precoTotal = 0;

  carrinhoDeCompras.adicionar(item){
    carrinhoDeCompras.lista.push(item);
    carrinhoDeCompras.precoTotal += item.preco*item.quantidade;
  };

  carrinhoDeCompras.retValor(){
    return carrinhoDeCompras.precoTotal;
  }

  return carrinhoDeCompras;
});

app.controller('ComprasController',['CarrinhoDeCompras','$scope', function(carrinhoDeCompras, $scope) {

  this.descricao;
  this.preco;
  this.quantidade;

  function Item(descricao, preco, quantidade) {
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
  }


  this.adicionarItem = function() {
    carrinhoDeCompras.adicionar(new Item(this.descricao, this.preco, this.quantidade));
    this.descricao = null;
    this.preco = null;
    this.quantidade = null;
  };

}]);

app.controller('CheckoutController',['CarrinhoDeCompras','$scope', function(carrinhoDeCompras, $scope) {

  this.precoTotal = carrinhoDeCompras.retValor();

}]);
