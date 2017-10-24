var app = angular.module('starwars');

app.factory('StarwarsService', ['$http', function($http){
    return({
        getInfo: function(link, callback){
                    $http.get(link).then(function(response){
                        callback(response.data);   
                 })
                }
    })
}]);
