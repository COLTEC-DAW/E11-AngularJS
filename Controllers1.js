this.celsiusToFahrenheit = function(celsius){
    x = (parseInt(celsius)*(9/5)) + 32;
    if (isNaN(x)) {
      return null;
    } else {
      return x;
    }
  }