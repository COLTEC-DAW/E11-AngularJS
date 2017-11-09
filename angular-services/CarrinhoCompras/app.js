var app = angular.module('myApp', []);

app.factory('CarrinhoCompras',function(){
    var carrinho = {};
    carrinho.itens = [];
    carrinho.total = 0;

    carrinho.armazenaitens = function(descricao,preco,qtd){
        var item = {
            descricao: descricao,
            preco: preco,
            qtd: qtd
        };
        
        carrinho.itens.push(item);
        carrinho.total += (preco * qtd);
        //console.log(carrinho.total);
    }
    carrinho.getTotal = function(){
        return carrinho;
    }
    return carrinho;
});

app.controller('comprasController',function($scope,CarrinhoCompras){
    $scope.descricao;
    $scope.preco;
    $scope.qtd;

    $scope.adiciona = function(){
        CarrinhoCompras.armazenaitens($scope.descricao,$scope.preco,$scope.qtd);
        //console.log(CarrinhoCompras.itens);
    }
});

app.controller('CheckoutController',function($scope,CarrinhoCompras){
    $scope.itens = CarrinhoCompras.itens;
    $scope.carrinho = CarrinhoCompras.getTotal();
});