"use strict";

adsApp.factory('CategoriesService', ['$resource', 'baseUrl',
    function ($resource, baseUrl) {
        var CategoriesService = $resource(baseUrl + '/categories');
        return {
            all: function () {
                return CategoriesService.query();
            }
        }
    }]);
