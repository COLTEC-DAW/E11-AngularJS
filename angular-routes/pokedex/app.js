var app = angular.module('pokedex', ['ngRoute']);

//Rotas
app.config(($routeProvider) => {
  $routeProvider
  .when("/",
    {
      redirectTo: "pokedex"
    }
  )
  .when("/pokedex",
    {
      templateUrl: "pokedex.html",
      controller: "PokedexController",
      controllerAs: "pokeCtrl"
    }
  )
  .when("/pokemon/:id",
    {
      templateUrl: "pokemon.html",
      controller: "PokemonController",
      controllerAs: "pokeCtrl"
    }
  )
  .otherwise({
    templateUrl: "erro404.html",
  });
});

//Servico
app.factory('PokedexService', function($http){
  var pokedexService = {};

  pokedexService.getPokemons = function(callback) {
    $http.get('https://pokeapi.co/api/v1/pokedex/1/').then(function(response) {
      var answer = response.data.pokemon;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  pokedexService.getPokemonDescriptionById = function(id, callback) {
    // TODO: implementar código para recuperar os detalhes de um pokemon por seu id
    $http.get('https://pokeapi.co/api/v1/pokemon/' + id).then(response => {
      callback(response.data);
    }, error => {
      callback(null);
    });
  };

  return pokedexService;
});

//Controllers
app.controller('PokedexController', ['PokedexService', function(pokedexService){
  var self = this;
  self.pokemons = [];
  self.pokemon = null;

  pokedexService.getPokemons(function(answer) {
    if (answer !== null) {
      self.pokemons = answer;
    }
  });

  self.pegarPokemon = function(id) {
    pokedexService.getPokemonDescriptionById(id, answer => {
      if(answer) {
        console.log(answer);
        self.pokemon = answer;
      }
    });
  }
}]);

app.controller('PokemonController', ['PokedexService', '$routeParams', function(pokedexService, $routeParams) {
  this.pokemonID = $routeParams.id;
  console.log(this.pokemonID);

  pokedexService.getPokemonDescriptionById(this.pokemonID, answer => {
      if(answer) {
        console.log(answer);
        this.pokemon = answer;
      }
    });
}]);