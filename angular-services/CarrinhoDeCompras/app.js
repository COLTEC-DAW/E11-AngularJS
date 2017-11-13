var app = angular.module('myApp', []);

app.controller('ComprasController', ['$scope', 'carrinhoService', function($scope, carrinho){
    $scope.item ={
        descricao: null,
        preco: null,
        quantidade: null
    }
    
    $scope.adicionaItem = function(){
        carrinho.listaCompras.push($scope.item);
        $scope.item = null;
    };
}]);

app.factory('carrinhoService', function(){
    var carrinhoService = {};
    
    carrinhoService.listaCompras = [];

    return carrinhoService;
})

app.controller('CheckoutController', ['$scope', 'carrinhoService', function($scope, carrinho){
    $scope.carrinho = carrinho;

    $scope.calculaTotal = function(){
        var total = 0;
        for(i=0; i<carrinho.listaCompras.length; i++){
            total += (carrinho.listaCompras[i].preco * carrinho.listaCompras[i].quantidade);
        }
        return total;
    }
}]);