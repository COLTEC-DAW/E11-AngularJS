var app = angular.module("swapp", ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
    .when("/",{
        redirectTo: "/login"
    })
    .when("/login",{
        templateUrl: "templates/login.html",
        controller: "LoginController",
        controllerAs: "loginCtrl"
    })
    .when("/home",{
        templateUrl: "templates/home.html",
        controller: "LoginController", //Provavelmente desnecessário
        controllerAs: "loginCtrl"
    })
    .when("/lista/:tipo/:pag",{
            templateUrl: "templates/lista.html",
            controller: "listaController",
            controllerAs: "listaCtrl"
        })
    .when("/someone/:nome/:pag",{
        templateUrl: "templates/someone.html",
        controller: "someoneController",
        controllerAs: "some1Ctrl"
    })
    .when("/aPlanet/:nome/:pag",{
        templateUrl: "templates/planet.html",
        controller: "planetController",
        controllerAs: "planetCtrl"
    })
    .when("/aFilm/:nome/:pag",{
        templateUrl: "templates/filme.html",
        controller: "filmeController",
        controllerAs: "filmeCtrl"
    })
    .when("/aSpecies/:nome/:pag",{
        templateUrl: "templates/especie.html",
        controller: "especieController",
        controllerAs: "especieCtrl"
    })
    .when("/aVehicle/:nome/:pag",{
        templateUrl: "templates/vehicle.html",
        controller: "vehicleController",
        controllerAs: "vehicleCtrl"
    })
    .when("/aStarship/:nome/:pag",{
        templateUrl: "templates/starship.html",
        controller: "starshipController",
        controllerAs: "starshipCtrl"
    })
    .otherwise({
        templateUrl: "templates/404.html"
    });
});
//-----------------------------------------------------------------------------------------------------------------------------------------
app.factory('ListaService', function($http){

  var listaService = {};

  listaService.getPage = function(pag, categoria, callback) {
    $http.get('https://swapi.co/api/'+categoria+'/?format=json&page='+pag).then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };
  return listaService;
});
//---------------------------------------------------------------------------------------------------------------------------------
app.controller("LoginController", ["$location", function($location){
    this.valida = function(idade){
        if(idade >= 18) $location.path("home");
        else alert("Menor de idade");
    }
}]);

app.controller('listaController', ["$scope", "$routeParams", "$http", "ListaService", function($scope, $routeParams, $http, ListaService) {
	console.log("CONTROLLER Lista");
    var self = this;
    this.categoria = $routeParams.tipo;
    this.pag = $routeParams.pag;
    this.lista = [];
    var answer;
    this.proxPag = null;
    this.antPag = null;
    console.log("Loading "+this.categoria);
    ListaService.getPage(this.pag, this.categoria, function(answer){
        console.log(answer);
        if (answer !== null) {
            self.lista = answer;
            if (answer.next !== null) {
                self.proxPag = parseInt(self.pag)+1;
                console.log("PROX: "+self.proxPag);
            }
            else self.proxPag = null;
            if (answer.previous !== null) {
                self.antPag = parseInt(self.pag)-1;
                console.log("ANT: "+self.antPag);
            }
            else self.antPag = null;
        }
    })
}])

app.controller('someoneController', ["$scope", function($scope) {
	this.pessoa = [];
}]);

app.controller('planetController', ["$scope", function($scope) {
	this.planeta = [];
}]);

app.controller('filmeController', ["$scope", function($scope) {
	this.film = [];
}]);

app.controller('especieController', ["$scope", function($scope) {
	this.species = [];
}]);

app.controller('vehicleController', ["$scope", function($scope) {
	this.vehicle = [];
}]);

app.controller('starshipController', ["$scope", function($scope) {
	this.starship = [];
}]);
