/**
 * Created by xs on 2017/12/25.
 */
'use strict';
(function () {
    angular.module('app')
        .component('xxRegister',{
            templateUrl:'/app/register/register.html',
            controller:fn
        });
    function fn($scope,userService) {
        $scope.user = {
            userName:"",
            password:"",
            nickName:"",
            region:"",
            birthday:"",
            userType:1
        };
        function cb(err,res) {
        }
        $scope.register =function () {
            var user = angular.copy($scope.user);
            console.log(user);
            if(user.birthday){
                var d = user.birthday;
                user.birthday = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() +' ' + '11:11:11';
            }
            if(!user.userName||!user.password)userService.notice("either userName or password can be empty");
            else userService.register({ userJson:[user] } ,cb);
        }
    }
})();