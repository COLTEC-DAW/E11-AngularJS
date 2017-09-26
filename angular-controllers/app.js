var app = angular.module('myApp', ["tempService"]);

app.controller('TemperaturaController', ["$scope", /*"tempService",*/ function($scope /*, tempService*/) {
	console.log("CONTROLLER");
  this.celsius = 40.0;
	$scope.Kelvin = 0;
	$scope.Fahrenheit=0;

	this.muda() = function () {
		//$scope.Kelvin = tempService.celsiusToKelvin(this.celsius);
		//$scope.Fahrenheit = tempService.celsiusToFahrenheit(this.celsius);
	};
}]);