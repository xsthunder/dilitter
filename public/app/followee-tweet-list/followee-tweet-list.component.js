/**
 * Created by xs on 2017/12/25.
 */
(function () {
    angular.module('app')
        .component('xxFolloweeTweetList',
            {
                templateUrl:'/app/followee-tweet-list/followee-tweet-list.html',
                controller:fn
            });
    function fn($scope,userService) {
        $scope.reload = function () {
            $scope.tweets=[];
            reload();
        };
        var reload= function () {
            userService.getFolloweeTweetList(function (err,res) {
                if(!err) $scope.tweets = res;
            });
        };
        $scope.reload();
    }
})();
