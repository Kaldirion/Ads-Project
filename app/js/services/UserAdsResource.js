"use strict";

adsApp.factory('UserAdsResource', ['$resource', 'baseUrl','AuthService',
    function ($resource, baseUrl,AuthService) {

        var headers = AuthService.getAuthorizationHeaders();

        //baseUrl + '/user/ads?pagesize=3&startpage=' + pageNumber + '&status=null', null

        var UserAdsResource = $resource(baseUrl + '/user/ads?pagesize=3&startpage=1&status=null', null, {
            'getAll': {method: 'GET', isArray: false}
        });
        return {
            all: function (adsRequestParams) {
                return UserAdsResource.getAll(adsRequestParams).$promise;
            }
        }
    }]);
