var app = angular.module("myApp", []);

app.service('CarrinhoDeCompras', function(){

  this.itens = [];

  this.getItens = function() {
    return this.itens;
  }

  this.addItem = function(item){
    this.itens.push(item);
  }

  this.getPreco = function(){
    valor = 0;
    this.itens.forEach(function(item) {
        valor += item.preco * item.quantidade;
    });
    return valor;
  }
});

app.controller('ComprasController', ['CarrinhoDeCompras', function(service){
  this.nome;
  this.descricao;
  this.preco;
  this.quantidade;

  this.adicionar = function(nome, descricao, preco, quantidade){
    item = {nome: nome, descricao: descricao, preco: preco, quantidade: quantidade};
    service.addItem(item);
  }
}]);

app.controller('CheckoutController', ['CarrinhoDeCompras', function(service){
  this.getLista = function() {
    return service.getItens();
  }
  this.preco = function(){
    return service.getPreco();
  }
}]);
