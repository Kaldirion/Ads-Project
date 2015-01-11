adsApp.factory('RegisterService', ['$http', 'baseUrl', '$q',
    function ($http, baseUrl, $q) {
        var userServiceUrl = baseUrl + '/user';

        function register(user) {
            console.log(user);
            var d = $q.defer();
            $http.post(userServiceUrl + '/register', user)
                .success(function (userRegistrationData) {
                    d.resolve(userRegistrationData);
                })
                .error(function (registrationErr) {
                    d.reject(registrationErr);
                });
            return d.promise;
        }


        return{
            register: register
        }
    }
]);
