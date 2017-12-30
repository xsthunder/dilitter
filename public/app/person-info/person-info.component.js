/**
 * Created by xs on 2017/12/27.
 */
(function () {
    angular.module('app')
        .component('xxPersonInfo',{
            templateUrl:'./app/person-info/person-info.html',
            controller:fn
        });
    function fn($scope,$stateParams,userService) {
        (function () {
            function cb(err,res) {
                if(!err)$scope.profile = res;
                // console.log($scope.profile);
            }
            userService.getProfile($stateParams['userName'],cb);
        })();
    }
})();
