"use strict";

adsApp.factory('TownsService', ['$resource', 'baseUrl',
    function ($resource, baseUrl) {
        var TownsService = $resource(baseUrl + '/towns');
        return {
            all: function () {
                return TownsService.query();
            }
        }
    }]);
