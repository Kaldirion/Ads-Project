adsApp.controller('AdsCtrl', ['$scope', 'pageSize', 'AdsResource','CategoriesService','TownsService','AuthService',
    function ($scope, pageSize, AdsResource, CategoriesService,TownsService,AuthService) {

        $scope.categories = CategoriesService.all();
        $scope.towns = TownsService.all();

        $scope.requestParams = {startPage: 1, pageSize: pageSize};
        $scope.getListedItems = function (adsRequestParams) {
            AdsResource.all(adsRequestParams).then(
                function (data) {
                    $scope.ads = data.ads;
                    $scope.pagesArr = new Array(data.numPages);
                }
            )
        };

        $scope.LogedIn = AuthService.userIsLogged();

        $scope.getListedItems($scope.requestParams);
    }]);