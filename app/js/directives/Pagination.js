adsApp.directive('pagination',function(){
    return {
        restrict: 'A',
        templateUrl : './app/templates/pagination.html',
        link: function($scope){
            $scope.firstPage = function(){
                $scope.requestParams.startPage = 1;
                $scope.getListedItems($scope.requestParams);
            }

            $scope.previousPage = function(){
                if ($scope.requestParams.startPage > 1){
                    $scope.requestParams.startPage -=1;
                }
                $scope.getListedItems($scope.requestParams);
            }

            $scope.nextPage = function(maxPages) {
                if ($scope.requestParams.startPage < maxPages){
                    $scope.requestParams.startPage += 1;
                }
                $scope.getListedItems($scope.requestParams);
            }

            $scope.lastPage = function(maxPages){
                $scope.requestParams.startPage = maxPages;
                $scope.getListedItems($scope.requestParams);
            }

            $scope.selectPage = function(pageIndex) {
                $scope.requestParams.startPage = pageIndex;
                $scope.getListedItems($scope.requestParams);
            }
        }
    }
})
