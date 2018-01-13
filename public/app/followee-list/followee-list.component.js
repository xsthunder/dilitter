/**
 * Created by xs on 2017/12/26.
 */
(function () {
    angular.module('app')
        .component( 'xxFolloweeList',{
            templateUrl:'/app/followee-list/followee-list.html',
            controller:fn
            });
    function fn($scope, userService) {
        var reload = function () {
            userService.getFolloweeList(null,function (err,res) {
                if(!err)$scope.users = res;
            });
        };
        $scope.reload =function () {
            $scope.users = [];
            reload();
        };
        $scope.personInfo = userService.personInfo;
        reload();
    }
})();