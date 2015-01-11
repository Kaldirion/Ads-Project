"use strict";
adsApp.factory('notification', [ function () {
    function errorMessage(message) {
        $('#alerts').notify().errorMessage(message);
    }
    function successMessage(message) {
        $('#alerts').notify().successMessage(message);
    }
    return {
        errorMessage: errorMessage,
        successMessage: successMessage
    }
}]);
