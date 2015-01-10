"use strict";

adsApp.factory('GuestAdsResource', ['$resource', 'baseUrl',
    function ($resource, baseUrl) {
        var GuestAdsResource = $resource(baseUrl + '/ads', null, {
            'getAll': {method: 'GET', isArray: false}
        });
        return {
            all: function (adsRequestParams) {
                return GuestAdsResource.getAll(adsRequestParams).$promise;
            }
        }
    }]);