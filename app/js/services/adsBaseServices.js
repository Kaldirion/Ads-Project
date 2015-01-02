"use strict";

adsApp.factory('AdsResource', ['$resource', 'baseUrl',
    function ($resource, baseUrl,pageSize) {
            var publicAdsResource = $resource(baseUrl + '/ads', null, {
                'getAll': {method: 'GET', isArray: false}
            });
        return {
            all: function (adsRequestParams) {
                return publicAdsResource.getAll(adsRequestParams).$promise;
            }
        }
    }]);
