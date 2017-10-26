let app = angular.module('rotasApp', ['ngRoute'])

app.config(function ($routeProvider) {

  $routeProvider.when('/home/:age', {
    templateUrl: 'home.html',
    controller: 'AgeController'
  })
  .when('/meu-nome/:age', {
    templateUrl: 'nome.html',
    controller: 'AgeController'
  })
  .when('/meu-sobrenome/:age', {
    templateUrl: 'sobrenome.html',
    controller: 'AgeController'
  })
  .when('/n-gosto/:age', {
    templateUrl: 'ngosto.html',
    controller: 'AgeController'
  })
  .when('/', {
    templateUrl: 'login.html',
    controller: 'LoginController',
    controllerAs: 'loginCtrl'
  })
  .when('/err/:age', {
    templateUrl: 'erro.html'
  })
  .otherwise({
    redirectTo: '/err'
  })
})

app.controller('AgeController', function ($routeParams) {
  this.age = $routeParams.age
  if (this.age <= 18) {
    $location.path('/')
  }
})

app.controller('LoginController', function ($location) {
  this.age = 0
  this.login = function (age) {
    age >= 18 ? $location.path(`/home/${age}`) : alert('too kid')
  }
})