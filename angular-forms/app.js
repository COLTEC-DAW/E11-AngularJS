var app = angular.module('CadastroApp', []);



app.controller('CadastroController', function() {
    this.add = function(usuario){}
});
 


app.directive('xCpf', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            
            mCtrl.$validators.xCpf = function(cpf, gh) {
                if(TestaCPF(cpf)){
                    mCtrl.$setValidity('cpf', true);
                }else{
                    mCtrl.$setValidity('cpf', false);
                }
                
                return cpf;
            }
        }
    };
});


var TestaCPF = function (strCPF) {//https://www.devmedia.com.br/validar-cpf-com-javascript/23916
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}