app.filter('formataCpf', function(){
    return function(cpf){
      return cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.charAt(9);
    }
});