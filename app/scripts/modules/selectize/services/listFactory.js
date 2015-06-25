angular.module('mySelectizeApp').factory('listFactory',['$http', function ($http) {
  return{
    getOptions: function(filname){
      return $http.get(filname);
    }
  }
}]);
