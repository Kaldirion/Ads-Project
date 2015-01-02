var adsApp = angular.module('adsApp',['ngRoute']);

adsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/templates/adsHome.html'
            })
            .when('/register', {
                templateUrl: 'app/templates/registerForm.html'
            })
            .when('/login',{
                templateUrl: 'app/templates/loginForm.html'
            })
            .when('/user/home',{
                templateUrl: 'app/templates/user/userHome.html'
            })
            .when('/user/ads/publish',{
                templateUrl: 'app/templates/user/publishAd.html'
            })
            .when('/user/ads', {
                templateUrl: 'app/templates/user/userAds.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);