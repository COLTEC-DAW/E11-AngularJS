var app = angular.module('myApp', []);
 app.controller('ContactController', ['$scope', function($scope){
    $scope.nome = "";
    $scope.telefone = "";
    $scope.email = "";
    $scope.contacts = [];

    $scope.nomeEd = "";
    $scope.telefoneEd = "";
    $scope.emailEd = "";
     $scope.add = function($name, $tel, $email){
        $scope.contacts.push({nome: $name, telefone: $tel, email: $email});
    }
     $scope.edt = function($index, $name, $tel, $email){
        $list = {nome: $name, telefone: $tel, email: $email}
        if($scope.contacts.length >= $index && $index > 0)
            $scope.contacts[$index-1] = $list;
    }
     $scope.del = function($index){
        if($index <= $scope.contacts.length && $index > 0)
            $scope.contacts.splice($index-1, 1);
    }
}]); 