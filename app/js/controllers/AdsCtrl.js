adsApp.controller('AdsCtrl', ['$scope', 'pageSize', 'AdsResource',
    function ($scope, pageSize, AdsResource) {

        $scope.requestParams = {startPage: 1, pageSize: pageSize};
        $scope.getListedItems = function (adsRequestParams) {
            AdsResource.all(adsRequestParams).then(
                function (data) {
                    $scope.ads = data.ads;
                    $scope.pagesArr = new Array(data.numPages);
                }
            )
        };
        $scope.getListedItems($scope.requestParams);
    }]);