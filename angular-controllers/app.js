var app = angular.module('myApp', []);

app.controller('TemperaturaController', function() {

  this.celsius = 38.0;

  this.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  this.celsiusToFht = function(celsius){
  	answer = (parseInt(celsius) * 1.8) + 32;
  	if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

});

app.controller('impostoController',function(){
	this.salario = 0;

	this.calculaimposto = function(salario){
		if(salario < 2000){
			answer = salario*0.10;
		}
		else if(salario > 3500){
			answer = salario * 0.30;
		}
		else{
			answer = salario * 0.20;
		}
		if (isNaN(answer)) {
     		return 0;
    	} else {
      		return  answer;
    	}
	};

});

app.controller('reviewController',function($scope){
	$scope.comment;
	$scope.nota;
	$scope.reviews = [];
	$scope.criaReview = function(){
		var review = {
			comment: $scope.comment,
			nota: $scope.nota
		};
		$scope.reviews.push(review);
		//console.log(review);
	}
})
