var app = angular.module("myApp", []);
 app.service('CarrinhoDeCompras', function(){
    var itens = [];
     function adc(item){
        itens.push(item);
    }
     function Preco(){
        var x = 0;
        itens.forEach(function(y) {
            x += y.preco * y.quantidade;
        });
        return x;
    }
     return{
        itens: itens,
        add: add,
        Preco: Preco
    }
});
app.controller('ComprasController', ['$scope', 'CarrinhoDeCompras', function($scope, CarrinhoDeCompras){
    $scope.item = {
        item: null,
        descricao: null,
        preco: null,
        quantidade: null
    };
    $scope.add = function(item){
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