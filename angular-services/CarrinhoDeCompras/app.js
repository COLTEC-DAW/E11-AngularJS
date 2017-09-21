var app = angular.module('myApp', []);

app.service('CarrinhoDeCompras', function(){
  return { listaDeItens: [] }
})
// service vs factory


app.controller('ComprasController', ['CarrinhoDeCompras', function(carrinho){
  this.item = {
    descricao: "",
    preco: 0,
    quantidade: 1
  }

  this.addItem = (item) => {
    carrinho.listaDeItens.push(Object.assign({}, item))
    item.descricao = ""
    item.preco = 0
    item.quantidade = 1
  }
}])

app.controller('CheckoutController', ['CarrinhoDeCompras', function(carrinho){
  this.itensNoCarrinho = carrinho.listaDeItens

  this.total = (lista) => {
    let total = 0
    lista.forEach(function(element, index) {
      total += element.preco * element.quantidade
    });
    return total
  }
}])