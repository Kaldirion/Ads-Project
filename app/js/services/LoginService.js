adsApp.factory('LoginService',function Login($http,baseUrl, $q,AuthService){

    function login(credentials) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: baseUrl + '/user/login',
            data: credentials
        })
            .success(function(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            })
            .error(function(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });
        return deferred.promise;
    }

    function logout(){
        var deferred = $q.defer(),
            headers = AuthService.getAuthorizationHeaders();

        $http({
            method: 'POST',
            url: baseUrl + '/user/logout',
            data: {},
            headers: headers
        })
            .success(function(data, status, headers, config) {
                AuthService.deleteAuthorizationHeaders();
                delete sessionStorage['currentUser'];
                deferred.resolve(data, status, headers, config);
            })
            .error(function(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });
        return deferred.promise;
    }

    return{
        login: login,
        logout: logout
    }
});
