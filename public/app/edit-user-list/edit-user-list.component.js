/**
 * Created by xs on 2017/12/26.
 */
(function () {
    angular.module('app')
        .component('xxEditUserList', {
            templateUrl: '/app/edit-user-list/edit-user-list.html',
            controller: fn
        });

    function fn($scope, userService) {
        var reload = function () {
            userService.showUserList( function (err, res) {
                if (!err) $scope.users = res;
            });
        };
        $scope.reload = function () {
            $scope.users = [];
            reload();
        };
        $scope.deleteUser = function (name) {
            function now(err,res) {
                reload();
            }
            userService.deleteUser(name, now);
        };
        $scope.personInfo = userService.personInfo;
        reload();
    }
})();