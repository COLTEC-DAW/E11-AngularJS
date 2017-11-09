var app = angular.module('pokedex', []);

app.factory('PokedexService', function($http){

  var pokedexService = {};

  pokedexService.getPokemons = function(callback) {
    $http.get('https://pokeapi.co/api/v2/pokedex/1/').then(function(response) {
      var answer = response.data.pokemon_entries;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  pokedexService.getPokemonDescriptionById = function(id, callback) {
    $http.get('https://pokeapi.co/api/v2/pokemon/' + id).then(function(response){
      var answer = response.data;
      callback(answer);
    },
    function(response){
      var answer = null;
      callback(answer);
    });
  };

  return pokedexService;
});


app.controller('PokedexController', ['PokedexService', function(pokedexService){
  var self = this;
  self.pokemons = [];
  self.Pokemon = {};
  self.pokeId = 1;

  pokedexService.getPokemons(function(answer) {
    if (answer !== null) {
      self.pokemons = answer;
    }
  });

  this.getDesc = function(){
    pokedexService.getPokemonDescriptionById(self.pokeId, function(answer){
      if (answer !== null) {
        self.Pokemon = answer;
      }
    });
  }
}]);
