adsApp.controller('TownFilter',function($scope){
    $scope.townFilter = function(selectedTownID){
        if (selectedTownID) {
            angular.extend($scope.requestParams,{townId: selectedTownID});
            console.log($scope.requestParams);
            console.log("Town ID : " + selectedTownID);
        }
        else{
            delete $scope.requestParams['townId'];
        }

        $scope.getListedItems($scope.requestParams);
    }
});