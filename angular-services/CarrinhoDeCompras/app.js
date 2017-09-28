var app = angular.module("myApp", []);

app.factory('CarrinhoDeCompras', function(){
    var itens = [];

    function addItem(item){
        itens.push(item);
    }

    function mostraPreco(){
        var valor = 0;
        itens.forEach(function(element) {
            valor += element.preco * element.quantidade;
        });
        return valor;
    }

    return{
        itens: itens,
        addItem: addItem,
        mostraPreco: mostraPreco
    }
});

app.controller('ComprasController', ['$scope', 'CarrinhoDeCompras', function($scope, CarrinhoDeCompras){
    $scope.item = {
        item: null,
        descricao: null,
        preco: null,
        quantidade: null
    };
    $scope.adicionar = function(item){
        var itemCopia = JSON.parse(JSON.stringify(item));
        CarrinhoDeCompras.addItem(itemCopia);
    }
}]);

app.controller('CheckoutController', ['$scope', 'CarrinhoDeCompras', function($scope, CarrinhoDeCompras){
    $scope.listaItens = CarrinhoDeCompras.itens;
    $scope.mostrar = function(){
        return CarrinhoDeCompras.mostraPreco();
    }
}]);
