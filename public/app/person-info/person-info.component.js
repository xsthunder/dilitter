/**
 * Created by xs on 2017/12/27.
 */
(function () {
    angular.module('app')
        .component('xxPersonInfo',{
            templateUrl:'./app/person-info/person-info.html',
            controller:fn
        });
    function fn($scope,userService) {
        (function () {
            function cb(err,res) {
                if(!err)$scope.profile = res;
            }
            //TODO read user from router params
            userService.getProfile(null,cb);
        })();
    }
})();
