/**
 * Created by xs on 2017/12/25.
 */
(function () {
    angular.module('app')
        .component('xxFolloweeTweetList',
            {
                templateUrl: '/app/followee-tweet-list/followee-tweet-list.html',
                controller: fn
            });

    function fn($scope, $stateParams, userService) {
        $scope.reload = function () {
            $scope.tweets = [];
            reload();
        };
        function reload() {
            function cb(err, res) {
                if (!err) $scope.tweets = res;
            }
            var name = $stateParams['userName'];
            if (name) {
                userService.getTweetList(name, cb);
            }
            else userService.getFolloweeTweetList(cb);
        }
        $scope.reload();
    }
})();
