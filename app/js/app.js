var adsApp = angular.module('adsApp',['ngResource','ngRoute']);

adsApp.config(['$routeProvider',
    function($routeProvider) {

        var userPermission = {
            isUser: {
                LoginService: function(AuthService) {
                    if (authorization.isUser() == true) {
                        return true;
                    } else {
                        return $q.reject('not authorized');
                    }
                }},
            isAdmin: {
                LoginService: function (AuthService) {
                    if (authorization.isAdmin() == true) {
                        return true;
                    } else {
                        return $q.reject('not authorized');
                    }
                }
            }
        };
        $routeProvider
            .when('/', {
                templateUrl: 'app/templates/adsHome.html',
                controller: 'AdsCtrl'
            })
            .when('/register', {
                templateUrl: 'app/templates/registerForm.html'
            })
            .when('/login',{
                templateUrl: 'app/templates/loginForm.html',
                controller: 'LoginCtrl'
            })
            .when('/user/home',{
                templateUrl: 'app/templates/adsHome.html',
                controller: 'AdsCtrl'
                //resolve: userPermission.isUser
            })
            .when('/user/ads/publish',{
                templateUrl: 'app/templates/user/publishAd.html'
            })
            .when('/user/ads', {
                templateUrl: 'app/templates/user/userAds.html',
                controller: 'UserAdsCtrl'
            })
            .when('/user/profile', {
                templateUrl: 'app/templates/user/userProfile.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .constant('baseUrl', 'http://localhost:1337/api')
    .constant('pageSize', 8);