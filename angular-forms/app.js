var app = angular.module('ClientesApp', []);

app.controller('CadastroController', function() {

});

//Validador CPF
app.directive('cpf', function() {
	return {
		require: 'ngModel',
		link: function(scope, elem, attrs, ctrl) {
			ctrl.$validators.myValidator = (modelValue, viewValue) => {
				if (ctrl.$isEmpty(modelValue)) {
					return false;
				}

				return TestaCPF(viewValue.toString());
			}
		}
	}
});

//Validador Celular
app.directive('celular', function() {
	return {
		require: 'ngModel',
		link: function(scope, elem, attrs, ctrl) {
			ctrl.$validators.myValidator = (modelValue, viewValue) => {
				if (ctrl.$isEmpty(modelValue)) {
					return false;
				}

				return viewValue.toString().length == 11;
			}
		}
	}
});

//Validador de vazio
app.directive('vazio', function() {
	return {
		require: 'ngModel',
		link: function(scope, elem, attrs, ctrl) {
			ctrl.$validators.myValidator = (modelValue, viewValue) => {
				if (ctrl.$isEmpty(modelValue)) {
					return false;
				} else {
					return true;
				}
			}
		}
	}
});

//Funcao de testar cpf
function TestaCPF(strCPF) {
	var Soma = 0;
	var Resto;

	if (strCPF == "00000000000") return false;

	for (i=1; i<=9; i++) {
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);	
	}

	Resto = (Soma * 10) % 11;

	if ((Resto == 10) || (Resto == 11)) {
		Resto = 0;	
	}
	if (Resto != parseInt(strCPF.substring(9, 10))) {
		return false;	
	}

	Soma = 0;
	for (i = 1; i <= 10; i++) {
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
	}
	Resto = (Soma * 10) % 11;

	if ((Resto == 10) || (Resto == 11)) {
		Resto = 0;
	}
	if (Resto != parseInt(strCPF.substring(10, 11))) {
		return false;
	}

	return true;
}