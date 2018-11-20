app.controller('ContactController', function(){
    this.nome = '';
    this.tel = '';
    this.email = '';
    this.contatos = [];
     this.contatoPos = function(c){
      for(let i=0; i< this.contatos.length; i++){
        if (this.contatos[i].nome == cont.nome && this.contatos[i].tel == c.tel && this.contatos[i].email == c.email){
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
      this.contatos[i].nome = nomeCont; this.contatos[i].tel = telCont;this.contatos[i].email = emailCont;
    }
  
    this.remove = function(contato){
      this.contatos.splice(this.contatoPos(contato), 1);
    };