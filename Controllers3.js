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