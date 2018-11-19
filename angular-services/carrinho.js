var app = angular.module("myApp", []);

app.service('CarrinhoDeCompras', function(){
    var itens = [];
     function add(item){
        itens.push(item);
    }

     function Preco(){
        var v = 0;
        itens.forEach(function(n) {
            v += n.preco * n.quantidade;
        });
        return v;
    }

     return{
        itens: itens,
        add: add,
        Preco: Preco
    }
});

app.controller('CompraController', ['$scope', 'CarrinhoDeCompras', function($scope, CarrinhoDeCompras){

    $scope.item = {
        item: null,
        descricao: null,
        preco: null,
        quantidade: null
    };

    $scope.adicionar = function(item){
        var item2 = JSON.parse(JSON.stringify(item));
        CarrinhoDeCompras.add(item2);
    }

}]);

app.controller('CheckoutController', ['$scope', 'CarrinhoDeCompras', function($scope, CarrinhoDeCompras){

    $scope.lista = CarrinhoDeCompras.itens;

    $scope.m = function(){
        return CarrinhoDeCompras.Preco();
    }
}]);
