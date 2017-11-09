var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "templates/login.html",
      controller: "LoginController",
      controllerAs: "logCtrl"
    }

  )
  .when("/home",
    {
      templateUrl: "templates/home.html",
      controller: "HomeController",
      controllerAs: "homeCtrl"
    }
  )
  .when("/contact",
    {
      templateUrl: "templates/contact.html",
      controller: "ContactController",
      controllerAs: "contCtrl"
    }
  )
  .when("/error",
    {
      templateUrl: "templates/erro.html",
      controller: "ErroController",
      controllerAs: "erroCtrl"
    }
  )
  .when("/about",
    {
        templateUrl: "templates/about.html",
        controller: "AboutController",
        controllerAs: "aboutCtrl"
    }
  )
  .otherwise(
    {
      redirectTo: "/error"
    }
  );
});

app.controller("HomeController", function(){
  this.mainTitle = "Página Principal";
  this.mainMessage = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  this.contact = "Para entrar em contato com a gente, acesse a aba de contatos";
});

app.controller("ContactController", function(){
  this.mainTitle = "Contato";
  this.mainMessage = "Tel.: (31) 7070-7070\n" +
    "Rua Astolfo, 45 - Dona Clara - São Paulo - SP";
});

app.controller("ErroController", function(){
  this.erroTitle = "Erro";
  this.erroMsg = "Um erro ocorreu. Favor retornar para a página principal.";
});

app.controller("AboutController", function(){
  this.aboutTitle = "Sobre";
  this.aboutMsg = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
});

app.controller("LoginController", ['$location', function($location){
  this.verifica = function(idade){
    if(idade >= 18){
      $location.path("/home");
    }
    else{
      alert("Alerta! Pessoa menor de idade detectada!");
    }
  }
}]);
