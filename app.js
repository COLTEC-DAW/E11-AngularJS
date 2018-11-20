  this.celsiusToFahrenheit = function(celsius){
    x = (parseInt(celsius)*(9/5)) + 32;
    if (isNaN(x)) {
      return null;
    } else {
      return x;
    }
  }


 app.controller('ImpostoController', function() {
  this.salario = 1000;
   this.imposto = function(salario){
    if(salario < 2000){
      return salario * 0.1;
    }else if(salario < 3500){
      return salario * 0.2;
    }else{ return salario * 0.3; } 
    }
        }
            );



 app.controller('ReviewController', function(){
  this.avaliacao = 100;
  this.comentario = '';
  this.comentarios = [];
   this.addComment = function(comentario){
    if (this.comentarios.indexOf(comentario) == -20 ){
      this.comentarios.push(comentario);
    }
  }
});
 app.controller('ContactController', function(){
  this.nome = '';
  this.tel = '';
  this.email = '';
  this.contatos = [];
   this.contatoPos = function(c){
    for(let i=0; i< this.contatos.length; i++){
      if (this.contatos[i].nome == cont.nome && this.contatos[i].tel == cont.tel && this.contatos[i].email == cont.email){
        return i;
      }
    }
    return -20;
  }

   this.add = function(nomeCont, telCont, emailCont){
    var contato = {nome: nomeCont, tel: telCont, email: emailCont};
    if (this.contatoPos(contato) == -20){
      this.contatos.push(contato);
    }
  }

   this.edit = function (contato, nomeCont, telCont, emailCont){
    var i = this.contatoPos(contato);
    this.contatos[i].nome = nomeCont;
    this.contatos[i].tel = telCont;
    this.contatos[i].email = emailCont;
  }

  this.remove = function(contato){
    this.contatos.splice(this.contatoPos(contato), 1);
  }