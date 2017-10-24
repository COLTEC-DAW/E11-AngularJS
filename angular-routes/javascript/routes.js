var app = angular.module('starwars', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/',
    {
      templateUrl: 'templates/home.html',
    }
  ).when('/people',
    {
      templateUrl: 'templates/people.html',
      controller: 'PeopleController',
      controllerAs: 'people'
    }
  ).when('/planets',
    {
      templateUrl: 'templates/planets.html',
      controller: 'PlanetsController',
      controllerAs: 'planets'
    }
  ).when('/starships',
  {
    templateUrl: 'templates/starships.html',
    controller: 'StarshipsController',
    controllerAs: 'starships'
  }
  ).otherwise({
    templateUrl: 'templates/404.html'
  })
});