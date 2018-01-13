/**
 * Created by xs on 2017/12/27.
 */
(function () {
    angular.module('app')
        .component('xxSendTweet',{
            templateUrl:'./app/send-tweet/send-tweet.html',
            controller:fn
        });
    function fn($scope,userService) {
        $scope.tweet={
            userName:"",
            wordContent:"",
            attitude:0
        };
        $scope.send= function (obj) {
            obj.releaseTime=+new Date();
            if(!obj.wordContent)return userService.notice("Text area should not be empty");
            //console.log(obj);
            obj.wordContent = obj.wordContent.substring(0,255);
            function cb(err,res) {

            }
            userService.sendTweet(obj,cb);
        }
    }
})();
