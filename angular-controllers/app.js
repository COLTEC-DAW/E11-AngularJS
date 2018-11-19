this.celsiusToFahrenheit = function(celsius){

  answer = (parseInt(celsius) * 1.8) + 32;
  if (isNaN(answer)) {
    return 0;
  } else {
    return  answer;
  }
}
});
app.controller('ImpostoController', function() {

  this.salario = 1000;

  this.imposto = function(salario){
      if(salario < 2000){
        return salario * 0.1;
      }else if(salario < 3500){
        return salario * 0.2;
      }else{
        return salario * 0.3;
    }
  }
});


app.controller('ReviewController', function(){

  this.avaliacao = 0;

  this.comentario = '';

  this.comentarios = [];

  this.addComment = function(comentario){

    if (this.comentarios.indexOf(comentario) == -1 ){
        this.comentarios.push(comentario);
    }
  }

});


app.controller('ContactController', function(){

    this.nome = '';

    this.phone = '';

    this.email = '';

    this.contatos = [];

    this.contatoPos = function(c){

      for(let i=0; i< this.contatos.length; i++){
        if (this.contatos[i].nome == c.nome && this.contatos[i].telefone == c.telefone && this.contatos[i].email == c.email){
          return i;
        }
      }
      return -1;
    }
    this.add = function(nomeC, telefoneC, emailC){

      var contato = {nome: nomeC, telefone: telefoneC, email: emailC};

      if (this.contatoPos(contato) == -1){
          this.contatos.push(contato);
      }
    }
    this.edit = function (contato, nomeC, telefoneC, emailC){
      var i = this.contatoPos(contato);

      this.contatos[i].nome = nomeC;

      this.contatos[i].telefone = telefoneC;

      this.contatos[i].email = emailC;
    }
    this.remove = function(contato){
      this.contatos.splice(this.contatoPos(contato), 1);
    }
});
