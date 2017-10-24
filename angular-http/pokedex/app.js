
var app = angular.module('pokedex', []);



app.factory('PokedexService', function($http){

  var pokedexService = {};

  pokedexService.getPokemons = function(callback) {
    $http.get('https://pokeapi.co/api/v1/pokedex/1/').then(function(response) {
      var answer = response.data.pokemon;
      answer.forEach(function(ele){
        ele.number = parseInt(ele.resource_uri.split('/')[3]);
      })
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  pokedexService.getPokemonDescriptionById = function(id, callback) {
    $http.get('https://pokeapi.co/api/v1/pokemon/'+id+'/').then(function(response) {
      var answer = response.data;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  return pokedexService;
});


app.controller('PokedexController', ['PokedexService', function(pokedexService){
  var self = this;
  self.pokemons = [];
  this.pokemon_atual = {
    nome: "",
    numero: "",
    ataque: "",
    defense: "",
    hp: "",
    sp_atk: "",
    sp_def: ""
  }


  pokedexService.getPokemons(function(answer) {
    if (answer !== null) {
      self.pokemons = answer;
    }
  });

  this.info = function(id){
    pokedexService.getPokemonDescriptionById(id, function(answer){
      self.pokemon_atual.nome = answer.name;
      self.pokemon_atual.numero = id;
      self.pokemon_atual.ataque = answer.attack;
      self.pokemon_atual.defense = answer.defense;
      self.pokemon_atual.hp = answer.hp;
      self.pokemon_atual.sp_atk = answer.sp_atk;
      self.pokemon_atual.sp_def = answer.sp_def;      
    })}
  }
]);
