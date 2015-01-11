adsApp.controller('RegisterController',['$scope','$location','notification','RegisterService','TownsService',
    function($scope,$location,notification,RegisterService,TownsService){

        $scope.towns = TownsService.all();
        $scope.passwordValidationPattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/;

        $scope.Register = function(user, registerForm){
            if (registerForm.$valid){
                RegisterService.register(user)
                    .then(
                    function(registerSuccessData){
                        notification.successMessage('User account created. Please login!');
                        $location.path('/user/home');
                    }
                )
            }
        }
}]);
