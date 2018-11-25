
var app = angular.module('FaceApp', []);


//*
app.factory('FaceService', function($http){
  var FaceService = {};
  var api_key    = 'e_yxMshVogxoqNTI39yN1ksP788NWn8f';
  var api_secret = 'mp-CG_0sbQeyVP2W0l1bTWgg7wdbtSbu';
  var base_url   = 'https://api-us.faceplusplus.com/';
  var attributes = 'gender,age,ethnicity,emotion';
  var maiorElemento = function(obj){//https://pt.stackoverflow.com/questions/54600/como-retornar-key-de-objeto-com-maior-valor-em-javascript
    var maior = -Infinity;        //funcao que retorna o maior elemento do objeto, será usada na determinação de qual a emoção mais intensa
    var chave;
    for(var prop in obj) {
        // ignorar propriedades herdadas
      if(obj.hasOwnProperty(prop)) { 
          if(obj[prop] > maior) {
              maior = obj[prop];
              chave = prop;
          }
      }
    }
    return chave;
  }  

  FaceService.getFaceToken = function(url, callback) {
    $http.post(base_url+'facepp/v3/detect?api_key='+api_key+'&api_secret='+api_secret+'&image_url='+url).then(function(response) {
      var answer = response.data.faces[0].face_token;
      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  FaceService.getFaceInfo = function(face_tokens, callback) {
    $http.post(base_url+'facepp/v3/face/analyze?api_key='+api_key+'&api_secret='+api_secret+'&return_attributes='+attributes+'&face_tokens='+face_tokens).then(function(response) {
      var attributes = response.data.faces[0].attributes;
      var answer = {};

      /* Mapeando as respostas da API para português */
      switch(attributes.gender.value){
        case 'Male': answer.genero = 'Masculino';
        break;
        case 'Female': answer.genero = 'Feminino';
      }
      answer.idade = attributes.age.value;

      switch(attributes.ethnicity.value){
        case 'WHITE': answer.etnia = 'Branco';
        break;
        case 'BLACK': answer.etnia = 'Negro';
        break;
        case 'ASIATIC': answer.etnia = 'Asiatico';
        break;
      }
      switch(maiorElemento(attributes.emotion)){ //escolhe a emoção mais intensa
        case 'anger': answer.emocao = 'Raiva';
        break;
        case 'disgust': answer.emocao = 'Desgosto';
        break;
        case 'fear': answer.emocao = 'Medo';
        break;
        case 'happiness': answer.emocao = 'Felicidade';
        break;
        case 'neutral': answer.emocao = 'Neutro';
        break;
        case 'sadness': answer.emocao = 'Tristeza';
        break;
        case 'surprise': answer.emocao = 'Surpresa';
        break;
      }

      callback(answer);
    },
    function(response) {
      var answer = null;
      callback(answer);
    });
  };

  return FaceService;
});

app.controller('FaceController', ['FaceService', function(FaceService){
  this.defaultImg = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
  this.loadingGif = 'https://forex02.ru/wp-content/uploads/2015/07/7122.gif';
  this.img_src = this.defaultImg ;
  var self = this;
  this.face_info = {
    genero: '-',
    idade: '-',
    etnia: '-',
    emocao: '-'
  };

 this.analisaFace = function(url){
  FaceService.getFaceToken(url, function(answer){ //obtem o token da imagem, esse é o código que será enviado para que o servidor analise a imagem
    var token = answer;
    FaceService.getFaceInfo(token, function(answer){
      if(answer){ //sucesso
        self.face_info = answer;
        self.img_src = url;
      }else{ //falha
        self.img_src = self.defaultImg;
      }
    });    

  });

  }
}]);
