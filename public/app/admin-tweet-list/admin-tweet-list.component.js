/**
 * Created by xs on 2017/12/25.
 */
(function () {
    angular.module('app')
        .component('xxAdminTweetList',
            {
                templateUrl: '/app/admin-tweet-list/admin-tweet-list.html',
                controller: fn
            });

    function fn($scope, $stateParams, userService) {
        $scope.reload = function () {
            $scope.tweets = [];
            reload();
        };
        $scope.fnChoice='0';
        function reload() {
            function cb(err, res) {
                if (!err) $scope.tweets = res;
            }
            if($scope.fnChoice==='0'){
                userService.showAdminTweetList(null,null,cb);
            }
            else {
                if(!$scope.start||!$scope.end){
                    userService.notice("any of the time range should not be empty");
                    return;
                }
                userService.showAdminTweetList(+$scope.start,+$scope.end+3600*24*1000,cb);
            }
        }
        $scope.reload();
        $scope.personInfo = userService.personInfo;
    }
})();
