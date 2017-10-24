var app = angular.module('pokedex', []);

app.factory('PokedexService', function($http){

  var pokedexService = {};

  pokedexService.getPokemons = function(callback) {
    $http.get('https://pokeapi.co/api/v1/pokedex/1/').then(function(response) {
      var answer = response.data.pokemon;
      response.data.pokemon.forEach(function(element) {
        element.num = parseInt(element.resource_uri.split('/')[3]);
      });
      answer.sort(function (a, b) {
        if (a.num > b.num) return 1;
        else if (a.num < b.num) return -1;
        else return 0;
      });
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };
  pokedexService.getOnePoke = function(num, callback){
    $http.get("https://pokeapi.co/api/v1/pokemon/"+num+"/").then(function(response){
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
    pokedexService.getOnePoke(num, function(answer){
      console.log(answer);
      self.pokemons[num-1].type1 = answer.types[0].name;
      if (answer.types[1] != null) self.pokemons[num-1].type2 = answer.types[1].name;
      self.pokemons[num-1].hp = answer.hp;
      self.pokemons[num-1].attack = answer.attack;
      self.pokemons[num-1].defense = answer.defense;
      self.pokemons[num-1].speed = answer.speed;
      self.pokemons[num-1].sp_atk = answer.sp_atk;
      self.pokemons[num-1].sp_def = answer.sp_def;
      self.pokemons[num-1].height = answer.height*0.1;
      self.pokemons[num-1].height = self.pokemons[num-1].height.toFixed(2);
      self.pokemons[num-1].weight = answer.weight*0.1;
      self.pokemons[num-1].weight = self.pokemons[num-1].weight.toFixed(2);
      self.pokemons[num-1].species = answer.species;
    })
  }

}]);
