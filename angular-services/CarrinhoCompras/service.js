angular.module("carrinhoService", [])

.factory("carrinhoService", function(){
    return {
        i : 0,
        compras : [],

        novaCoisa : function(novaCoisa){
            this.compras.push({index: this.i, nome: novaCoisa.nome, preco: novaCoisa.preco});
            this.i++;
        },
        tiraCoisa : function(index){
            this.compras.splice(index, 1);
            for (i=index; this.compras[i]!=null; i++) this.compras[i].index--;
            this.i--;
        },
        somaTudo : function(){
            soma = 0;
            this.compras.forEach(function(element) {
                soma += element.preco;
            });
            return soma;
        }
    }
});