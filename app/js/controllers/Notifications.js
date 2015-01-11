"use strict";
adsApp.factory('notification', [ function () {

    function errorMessage(Msg){
        $('#alerts').noty({
            text: Msg,
            type: "error",
            timeout: 5000
        });
    }

    function successMessage(Msg) {
        $('#alerts').noty({
            text: Msg,
            type: "success",
            timeout: 5000
        });
    }
    return {
        errorMessage: errorMessage,
        successMessage: successMessage
    }
}]);
