adsApp.controller('LoginCtrl',function($scope,$rootscope,$location,LoginService,AuthService){
   $scope.login = function(credential, loginForm){
       if(loginForm.$valid){
           LoginService.login(credential).then(function(data){
               AuthService.setUserSession(data);
               $rootscope.$broadcast('LoginSuccess')
               $location.path('/home');
           })
       }
   }
});