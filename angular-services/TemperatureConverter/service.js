angular.module("tempService", [])
    .factory("tempService", function(){
        return {
            celsiusToKelvin : function(celsius){
                answer = parseInt(celsius) + 273.5;
                if (isNaN(answer)) return 0;
                else return  answer;
            },
            celsiusToFahrenheit : function(celsius){
                answer = parseInt(celsius) *1.8+32;
                if (isNaN(answer)) return 0;
                else return answer;
            }
        }
    });