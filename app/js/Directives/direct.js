angular.module('ejeDirect',[

  ])

.directive('lsTable', function(){

   function link(scope, element, attrs){

        scope.ObjtoArray = function(array){
         return _.map(array, function(obj){
                        //console.log(obj);
                        //console.log(_.toArray(obj));
                        return _.toArray(obj);
                     });
        };

        scope.TablaHeader = function(obj){
            //console.log(_.keys(obj));
            return _.keys(obj);
         };

        scope.predicate = '0';
        scope.reverse = false;

        scope.tableOrder = function(val){
           if (scope.predicate == val.toString()) {
            scope.reverse = !scope.reverse;
         }else{
            scope.reverse = false;
            scope.predicate = val.toString();
         }
        };

        scope.tabla.datos = scope.ObjtoArray(scope.tabla.datos);
        scope.tabla.header= scope.TablaHeader(scope.tabla.header);
      // scope.limite = scope.tabla.datos.length;
   };
   
   return{
      restrict: 'E',      
      templateUrl: "/flugel/app/html/tabla.html",
      link: link
   };  
})

.directive('tableVacios', function(){

   function link(scope, element, attrs){

        scope.ObjtoArray = function(array){
         return _.map(array, function(obj){
                        //console.log(obj);
                        //console.log(_.toArray(obj));
                        return _.toArray(obj);
                     });
        };

        scope.TablaHeader = function(obj){
            //console.log(_.keys(obj));
            return _.keys(obj);
         };

        scope.predicate = '0';
        scope.reverse = false;

        scope.tableOrder = function(val){
           if (scope.predicate == val.toString()) {
            scope.reverse = !scope.reverse;
         }else{
            scope.reverse = false;
            scope.predicate = val.toString();
         }
        };

        scope.tablavacios.datos = scope.ObjtoArray(scope.tablavacios.datos);
        scope.tablavacios.header= scope.TablaHeader(scope.tablavacios.header);
      // scope.limite = scope.tabla.datos.length;
   };
   
   return{
      restrict: 'E',      
      templateUrl: "/flugel/app/html/tabla1.html",
      link: link
   };  
})

.directive('navMain', function(){

  return{
    restrict: 'E',      
      templateUrl: "/flugel/app/html/navegacion.html",
      
  };
});