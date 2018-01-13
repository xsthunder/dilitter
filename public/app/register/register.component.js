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
    function fn($scope,$state,userService) {
        $scope.user = {
            userName:"",
            password:"",
            nickName:"",
            region:"",
            birthday:"",
            userType:1
        };
        function cb(err,res) {
            //console.log(err,res);
            if(!err)$state.go('login');
        }
        $scope.back = function(){
            $state.go('login');
        };
        $scope.register =function () {
            var user = angular.copy($scope.user);
            for(var i in user){
                if(!user[i]){
                    userService.notice('None of the area can be empty');
                    return;
                }
            }
            if(user.birthday){
                var d = user.birthday;
                user.birthday = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() +' ' + '11:11:11';
            }
            if(!user.userName||!user.password)userService.notice("either userName or password can be empty");
            else userService.register(user ,cb);
        }
    }
})();