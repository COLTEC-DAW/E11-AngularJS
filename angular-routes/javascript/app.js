var app = angular.module('starwars');

app.controller('PlanetsController', ['$routeParams', 'StarwarsService', function($routeParams, service){
  var self = this;
  this.page = 'https://swapi.co/api/planets/?page=';
  this.now = 1;
  this.prev = '';
  this.next = '';
  
  var req = function(p, n){
    service.getInfo(p + n, function(data){
      self.info = data;
      self.prev = self.info.previous !== null ? '<<' : '';
      self.next = self.info.next !== null ? '>>' : '';
    })
  };

  req(this.page, this.now);

  this.proxima_pagina = function(){
    this.now++;
    req(this.page, this.now);
  }

  this.pagina_anterior = function(){
    this.now--;
    req(this.page, this.now);
  }
}])
.controller('PeopleController', ['$routeParams', 'StarwarsService', function($routeParams, service){
  var self = this;
  this.page = 'https://swapi.co/api/people/?page=';
  this.now = 1;
  this.prev = '';
  this.next = '';
  
  var req = function(p, n){
    service.getInfo(p + n, function(data){
      self.info = data;
      self.prev = self.info.previous !== null ? '<<' : '';
      self.next = self.info.next !== null ? '>>' : '';
    })
  };

  req(this.page, this.now);

  this.proxima_pagina = function(){
    this.now++;
    req(this.page, this.now);
  }

  this.pagina_anterior = function(){
    this.now--;
    req(this.page, this.now);
  }
}])
.controller('StarshipsController', ['$routeParams', 'StarwarsService', function($routeParams, service){
  var self = this;
  this.page = 'https://swapi.co/api/starships/?page=';
  this.now = 1;
  this.prev = '';
  this.next = '';
  
  var req = function(p, n){
    service.getInfo(p + n, function(data){
      self.info = data;
      self.prev = self.info.previous !== null ? '<<' : '';
      self.next = self.info.next !== null ? '>>' : '';
    })
  };

  req(this.page, this.now);

  this.proxima_pagina = function(){
    this.now++;
    req(this.page, this.now);
  }

  this.pagina_anterior = function(){
    this.now--;
    req(this.page, this.now);
  }
}])