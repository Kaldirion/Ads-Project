adsApp.controller('UserNavigation',function($scope,$location){
    $scope.showUserAdsNav = function(){
        $scope.sideNavVis = true;
        $location.path('/user/ads');
    };

});
