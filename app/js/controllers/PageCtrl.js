adsApp.controller('PageCtrl', ['$scope', '$location','AuthService',
    function ($scope, $location,AuthService) {
        $scope.authorization = AuthService;
        $scope.location = $location;
    }]);

