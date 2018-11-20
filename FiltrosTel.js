 app.filter('formataTel', function(){
  return function(tel){
    return "(" + tel.slice(0, 2) + ")" + tel.slice(2, 6) + "-" + tel.slice(6, 10);
  }
});