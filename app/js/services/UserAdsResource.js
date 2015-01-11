"use strict";

adsApp.factory('UserAdsResource', ['$resource', 'baseUrl','AuthService','pagesize',
    function ($resource, baseUrl,AuthService,pagesize) {

        var headers = AuthService.getAuthorizationHeaders();
        var UserAdsResource = $resource(baseUrl + '/user/ads', null, {
            'getUserAds': {method: 'GET', headers: headers},
            'getUserAdsWithStatus': {method: 'GET', headers: headers}
        });
        return {
            all: function (adsRequestParams) {
                return UserAdsResource.getAll(adsRequestParams).$promise;
            }
        }
    }]);
