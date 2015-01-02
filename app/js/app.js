var adsApp = angular.module('adsApp',['ngResource','ngRoute']);

adsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/templates/adsHome.html',
                controller: 'AdsCtrl'
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
            .when('/user/profile', {
                templateUrl: 'app/templates/user/userProfile.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .constant('baseUrl', 'http://localhost:1337/api')
    .constant('pageSize', 2);