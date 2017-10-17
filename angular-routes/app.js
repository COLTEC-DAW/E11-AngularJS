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
        controller: "listaController",
        controllerAs: "loginCtrl"
    })
    .when("/people",{
        templateUrl: "templates/lista.html",
        controller: "listaController",
        controllerAs: "listaCtrl"
    })
    .when("/someone",{
        templateUrl: "templates/someone.html",
        controller: "someoneController",
        controllerAs: "some1Ctrl"
    })
    .when("/planets",{
        templateUrl: "templates/lista.html",
        controller: "listaController",
        controllerAs: "listaCtrl"
    })
    .when("/aPlanet",{
        templateUrl: "templates/planet.html",
        controller: "planetController",
        controllerAs: "planetCtrl"
    })
    .when("/films",{
        templateUrl: "templates/lista.html",
        controller: "listaController",
        controllerAs: "listaCtrl"
    })
    .when("/aFilm",{
        templateUrl: "templates/filme.html",
        controller: "filmeController",
        controllerAs: "filmeCtrl"
    })
    .when("/species",{
        templateUrl: "templates/lista.html",
        controller: "listaController",
        controllerAs: "listaCtrl"
    })
    .when("/aSpecies",{
        templateUrl: "templates/especie.html",
        controller: "especieController",
        controllerAs: "especieCtrl"
    })
    .when("/vehicles",{
        templateUrl: "templates/lista.html",
        controller: "listaController",
        controllerAs: "listaCtrl"
    })
    .when("/aVehicle",{
        templateUrl: "templates/vehicle.html",
        controller: "vehicleController",
        controllerAs: "vehicleCtrl"
    })
    .when("/starships",{
        templateUrl: "templates/lista.html",
        controller: "listaController",
        controllerAs: "listaCtrl"
    })
    .when("/aStarship",{
        templateUrl: "templates/starship.html",
        controller: "starshipController",
        controllerAs: "starshipCtrl"
    })
    .otherwise({
        templateUrl: "templates/404.html"
    });
});
//---------------------------------------------------------------------------------------------------------------------------------------------
app.factory("listaService", function(){
    var listaService = {};
    listaService.lista = [],
    listaService.novaLista = function(lista){
        this.lista = lista;
    }
    return listaService;
});
//---------------------------------------------------------------------------------------------------------------------------------
app.controller("LoginController", ["$location", function($location){
    this.valida = function(idade){
        if(idade >= 18) $location.path("home");
        else alert("Menor de idade");
    }
}]);

app.controller('listaController', ["$scope", "listaService", function($scope, listaService) {
	console.log("CONTROLLER Lista");
	this.lista = [];
    var answer = undefined;
	this.novaLista = function (categoria) {
        for (i=1; answer !== null; i++){
            console.log("PG "+i);
            $http.get('https://swapi.co/api/'+categoria+'/?format=json&page='+i).then(function(response) {
                answer = response.data.results;
                answer.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    else if (a.name < b.name) return -1;
                    else return 0;
                });
                callback(answer);
            },
            function(response) {
                var answer = null;
                callback(answer);
            });
            lista += answer;
        }
        console.log(lista);
	};
}])

app.controller('someoneController', ["$scope", function($scope) {
	console.log("CONTROLLER someone");
	this.pessoa = [];
}]);

app.controller('planetController', ["$scope", function($scope) {
	console.log("CONTROLLER planeta");
	this.planeta = [];
}]);

app.controller('filmeController', ["$scope", function($scope) {
	console.log("CONTROLLER filme");
	this.film = [];
}]);

app.controller('especieController', ["$scope", function($scope) {
	console.log("CONTROLLER especie");
	this.species = [];
}]);

app.controller('vehicleController', ["$scope", function($scope) {
	console.log("CONTROLLER veiculo");
	this.vehicle = [];
}]);

app.controller('starshipController', ["$scope", function($scope) {
	console.log("CONTROLLER starship");
	this.starship = [];
}]);
