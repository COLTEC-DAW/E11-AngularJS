angular.module("logService", [])
    .factory("logService", function(){
        return {
            log : function(nivel, mensagem){
                if(nivel==0) console.log(mensagem);
                else if(nivel==1) console.error(mensagem);
            }
        }
    });