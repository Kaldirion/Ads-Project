adsApp.controller('LoginCtrl',function($scope,$location,LoginService,AuthService,notification){
   $scope.login = function(credential, loginForm){

       $scope.errorOccurred = false;
       $scope.alertMsg = '';

       if(loginForm.$valid){
           LoginService.login(credential).then(function(data){
               AuthService.setUserSession(data);
               //console.log(data);
               $location.path('/home');
           }, function(error) {
               notification.errorMessage('Invalid Login');
           });
       }
   }
});
