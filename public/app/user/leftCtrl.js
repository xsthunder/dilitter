(function () {
        angular.module('app')
            .controller('leftCtrl', fn);

        function fn($scope, $timeout, $mdSidenav, $state, userService) {
            $scope.isAdmin = userService.name === 'admin';
            $scope.close = function () {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav('left').close()
                    .then(function () {
                    });
            };
            $scope.goto = function (name) {
                $state.go(name);
                $scope.close();
            };
            $scope.logout= function () {
                $scope.goto('login');
            };
            $scope.editUserList=function () {
                $scope.goto('user.edit-user-list');
            };
            $scope.routers = [
                {
                    name: 'user.followee-tweet-list',
                    alias: '关注的内容'
                },
                {
                    name: 'user.send-tweet',
                    alias: '发美食推'
                }, {
                    name: 'user.followee-list',
                    alias: '关注的人'
                } ];
            $scope.personInfo=function () {
                userService.personInfo();
                $scope.close();
            }
        }
    }
)();