"use strict";

adsApp.factory('UserAdsResource', ['$resource', 'baseUrl','AuthService',
    function ($resource, baseUrl,AuthService) {
        var userProfileUrl = baseUrl + '/user/profile',

            headers = AuthService.getAuthorizationHeaders(),
            UserAdsResource = $resource(userProfileUrl, null, {
                'get': {method: 'GET', headers: headers}
            })

        return {
            get: function () {
                return UserAdsResource.get()
            }
        }
    }]);
