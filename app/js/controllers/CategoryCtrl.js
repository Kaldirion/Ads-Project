adsApp.controller("CategoryFilter",function($scope){
   $scope.categoryFilter = function(categoryID){
       if (categoryID){
           angular.extend($scope.requestParams,{CategoryId : categoryID});
       }else{
            delete $scope.requestParams['CategoryId'];
       }

       $scope.getListedItems($scope.requestParams);
   }

});