angular.module("carrinhoService", [])
    .factory("carrinhoService", function(){
        return {
            novaCoisa : function(coisa, preco){
                carrinhoCtrl.compras.push(coisa);
                checkCtrl.preco += preco;
            },
            celsiusToFahrenheit : function(celsius){
                answer = parseInt(celsius) *1.8+32;
                if (isNaN(answer)) return 0;
                else return answer;
            }
        }
    });