angular.module('mySelectizeApp')
  .directive('selectize',function(listFactory){
    return{
      restrict:'E',
      template:'<input type="text">',
      replace:true,
      require:'ngModel',
      scope:{
        options:'@',
        ngModel:'='
      },
      link:function(scope, element){
        var opts,
            $element = $(element);
        listFactory.getOptions(scope.options).success(function(data){
          opts = data.options;
          $element.selectize({
            options:opts
          });
        })
      }
    }
  });
