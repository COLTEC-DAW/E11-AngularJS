var app = angular.module('myApp', []);

 app.factory('CarrinhoDeCompras', function() {
    return{
        listaItens: [{
            descricao: "Sabão em pó",
            preco: 10
        },
        {
            descricao: "Detergente",
            preco: 6
        },
        {
            descricao: "Refrigerante",
            preco: 8
        }],
        carrinho: []
    }
});

app.controller('ComprasController', ["$scope", 'CarrinhoDeCompras', function($scope, CarrinhoService){
    $scope.listaItens = CarrinhoService.listaItens;

    this.adicionaItem = function(item){
        if(CarrinhoService.carrinho.indexOf(item) == -1){
            item.quantidade = 1;
            CarrinhoService.carrinho.push(item);
        } else {
            CarrinhoService.carrinho[CarrinhoService.carrinho.indexOf(item)].quantidade++;
        }
    }
}]);

app.controller('CheckoutController', ["$scope", 'CarrinhoDeCompras', function($scope, CarrinhoService){
    this.mostra = CarrinhoService.carrinho;

    $scope.total = function(){
        var aux = 0;
        for(var i=0;i<CarrinhoService.carrinho.length;i++){
            aux = aux + (CarrinhoService.carrinho[i].preco * CarrinhoService.carrinho[i].quantidade);
        }
        return aux;
    }
}]);
