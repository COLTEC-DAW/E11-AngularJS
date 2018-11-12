
var app = angular.module('ClientesApp', []);

app.directive('cpfValidator', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.cpfValidator = function(modelValue, viewValue) {
                var digitos = (""+viewValue).split("");
                var soma = 0;
                for (let i=10; i>=2; i--){
                    soma += digitos[10-i]*i;
                }
                // Validou primeiro dígito
                if ((soma*10) % 11 == digitos[9] || ((soma*10) % 11 == 10 && digitos[9] == 0)){ 
                    soma = 0;
                    for (let i=11; i>=2; i--){
                        soma += digitos[11-i]*i;
                    }
                    // Validou segundo dígito
                    if ((soma*10) % 11 == digitos[10] || ((soma*10) % 11 == 10 && digitos[10] == 0)){ 
                        return true;
                    }

                    return false;
                }

                return false;
            } 
        }
    };
});