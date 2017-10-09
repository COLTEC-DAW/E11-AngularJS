var app = angular.module('pokedex', []);

app.factory('PokedexService', function($http){

  var pokedexService = {};

  pokedexService.getPokemons = function(callback) {
    $http.get('https://pokeapi.co/api/v1/pokedex/1/').then(function(response) {
      var answer = response.data.pokemon;
      response.data.pokemon.forEach(function(element) {
        element.num = parseInt(element.resource_uri.split('/')[3]);
      });
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };
  pokedexService.getOnePoke = function(num, callback){
    $http.get("https://pokeapi.com/api/v1/pokemon/"+num+"/").then(function(response){
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

  pokedexService.getPokemons(function(answer) {
    if (answer !== null) {
      self.pokemons = answer;
    }
  });
  this.expandPoke = function(num){
    console.log("scouting "+num);
    pokedexService.getOnePoke(num, function(answer){
      this.pokemon[num].type1 = answer.types[0].name;
      this.pokemon[num].type2 = answer.types[1].name;
      console.log("busca feita");
      console.log(this.pokemon[num]);
    })
  }

}]);
