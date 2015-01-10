adsApp.controller('UserAdsCtrl', ['$scope', 'pageSize', 'GuestAdsResource','UserAdsResource',
    function ($scope, pageSize, GuestAdsResource,UserAdsResource) {

        $scope.requestParams = {startPage: 1, pageSize: pageSize};
        $scope.getListedItems = function (adsRequestParams) {
            UserAdsResource.all(adsRequestParams).then(
                function (data) {
                    $scope.ads = data.ads;
                    $scope.pagesArr = new Array(data.numPages);
                }
            )
        };

        $scope.getListedItems($scope.requestParams);
    }]);