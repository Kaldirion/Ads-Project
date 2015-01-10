adsApp.controller('PageCtrl', ['$scope', '$location','AuthService','LoginService',
    function ($scope, $location,AuthService,LoginService) {
        $scope.authorization = AuthService;
        $scope.authentication = LoginService;
        $scope.location = $location;
    }]);

