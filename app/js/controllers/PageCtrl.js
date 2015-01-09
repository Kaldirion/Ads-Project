adsApp.controller('PageCtrl', ['$scope', '$location','AuthService',
    function ($scope, $location,AuthService) {

        $scope.authenticaton = AuthService;

        $scope.location = $location;
    }]);

