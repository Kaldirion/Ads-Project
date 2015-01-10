adsApp.controller('UserProfileCtrl',['$scope','$location','UserResource',
    function($scope,$location,UserResource) {
        $scope.user = UserResource.get();
}]);
