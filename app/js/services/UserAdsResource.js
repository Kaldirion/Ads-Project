"use strict";

adsApp.factory('UserAdsResource', ['$resource', 'baseUrl','AuthService',
    function ($resource, baseUrl,AuthService) {
        var userAdsUrl = baseUrl + '/user/ads',
            headers = AuthService.getAuthorizationHeaders(),
            userAdsResource = $resource(userAdsUrl, null, {
                'getUserAds': {method: 'GET', headers: headers}
            });

        console.log(headers);

        return {
            getUserAds: function (adsRequestParams) {
                return userAdsResource.getUserAds(adsRequestParams).$promise;
            }
        }
    }]);
