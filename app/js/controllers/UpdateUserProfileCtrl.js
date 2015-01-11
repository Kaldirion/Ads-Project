adsApp.controller('UserProfileCtrl',['$scope','$location','UserResource','notification',
    function($scope,$location,UserResource,notification) {
        $scope.user = UserResource.get();
        $scope.editUserProfile = function (user, profileEditForm) {
            if (profileEditForm.$valid) {
                UserResource.editUserProfile(user)
                    .then(
                    function userProfileEditSuccess(profileEditForm) {
                        notification.successMessage('User profile successfully updated.');
                        $location.path('/user/home');
                    },
                    function userProfileEditError(userProfileEditErr) {
                        notification.errorMessage('User profile couldn\'t be updated.');
                        console.log(userProfileEditErr);
                    }
                )
            } else {
                notification.errorMessage('The user form contains invalid data.');
            }
        };

}]);
