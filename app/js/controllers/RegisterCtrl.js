adsApp.controller('RegisterController',['$scope','$location','notification','RegisterService','TownsService',
    function($scope,$location,notification,RegisterService,TownsService){

        $scope.towns = TownsService.all();
        $scope.passwordValidationPattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/;

        $scope.Register = function(user, registerForm){
            if (registerForm.$valid){
                console.log(user);
                RegisterService.register(user).then(
                    function(registerSuccessData){
                        notification.successMessage('User account created. Please login!');
                        $location.path('/home');
                    }, function(error) {
                        notification.errorMessage('There was problem with your register. Please try again.');
                        $location.path('/register');
                    }
                );
            }
        }
}]);
