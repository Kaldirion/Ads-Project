"use strict";
adsApp.factory('notification', [ function () {
    function errorMessage(message) {
        $('#notes').notify().errorMessage(message);
    }
    function successMessage(message) {
        $('#notes').notify().successMessage(message);
    }
    return {
        errorMessage: errorMessage,
        successMessage: successMessage
    }
}]);
