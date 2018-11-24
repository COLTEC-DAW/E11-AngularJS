var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider) {
  
  $routeProvider.when("/", 
    {
      templateUrl: "app.html",
      controller: "MainController",
      controllerAs: "mainCtrl"
    }
  )
  .when("/cidade", 
    {
      templateUrl: "cidade.html",
      controller: "CidadeController",
      controllerAs: "cddCtrl"
    }
  )
  .when("/estado", 
    {
      templateUrl: "estado.html",
      controller: "EstadoController",
      controllerAs: "etdCtrl"
    }
  )
  .when("/pais/:idade", 
    {
      templateUrl: "pais.html",
      controller: "PaisController",
      controllerAs: "psCtrl"
    }
  )
  .when("/erro", 
    {
      templateUrl: "erro.html",
    }
  )
  .otherwise(
    {
      redirectTo: "/erro"    
    }
  );
});


app.controller("MainController", function($location) {
  this.mainMessage = "Página Inicial";
  this.aviso = '';
    this.permissao = function(idade) {
        if (idade >= 18){
            $location.path("pais/" + idade);
        }else{
            this.aviso = "Não pode entrar";
        }
    };
});


app.controller("CidadeController", function() {
  this.cidadeTitle = "BH";
  this.cidadeMessage = "Cidade: Belo Horizonte"
});

app.controller("EstadoController", function() {
    this.estadoTitle = "MG";
    this.estadoMessage = "Estado: Minas Gerais"
});

app.controller("PaisController", function($routeParams, $location) {
    this.paisTitle = "BR";
    this.paisMessage = "País: Brasil"

    this.idade = $routeParams.idade;
    if (this.idade < 18){
        $location.path("/");
    }
});