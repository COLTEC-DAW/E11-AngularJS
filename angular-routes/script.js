	var myApp = angular.module('myApp', ['ngRoute']);
  

    myApp.config(function($routeProvider) {
      $routeProvider
        .when('/',{
          templateUrl : 'pages/login.html',
          controller  : 'loginController'
        })
        .when('/home',{
          templateUrl : 'pages/home.html',
          controller  : 'mainController'
        })
        .when('/about', {
          templateUrl : 'pages/about.html',
          controller  : 'aboutController'
        })
        .when('/contact', {
          templateUrl : 'pages/contact.html',
          controller  : 'contactController'
        })
        .otherwise({
          templateUrl : 'pages/error.html',
          controller  : 'errorController'
        });
    });
  

    myApp.controller('mainController', function($scope) {

      $scope.message = 'Essa é a Pagina inicial';
    });
  
    myApp.controller('aboutController', function($scope) {
      $scope.message = 'Esse site é apenas um exercicio.';
    });
  
    myApp.controller('contactController', function($scope) {
      $scope.message = '4002-8922';
    });
    myApp.controller('errorController', function($scope){
      $scope.message = 'ERROR 404';
    });
    
    myApp.controller("loginController", function($location,$scope){
      $scope.verifica = function(idade){
        if(idade >= 18){
          $location.path("home");
        }
        else{
          alert("coe dimenor, aqui ce n entra");
        }
      }
    });