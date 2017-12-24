/**
 * Created by xs on 12/24/2017.
 */
(function () {

    angular.module('app')
        .factory('userService',fn);
    function fn($mdToast,userFactory) {
        var self = {};
        self.profile = null;
        self.name = null;
        self.notice = function (msg) {
            msg = msg||"something wrong";
            console.log(msg);
            $mdToast.show(
                $mdToast.simple()
                    .textContent(msg)
                    .hideDelay(3000)
            );
        };
        self.notice();
        self.wrap = function (s,err,res,ans,cb) {
            if(err)self.notice();
            else (err = res['error']);
            if(!err&&s)self[s] = ans;
            if(res['message'])self.notice(res['message']);
            cb(err,res);
        };
        self.login = function(name,pwd,cb){
            userFactory.login(name,pwd,function (err,res) {
                self.wrap('name', err,res,name,cb);
            });
        };
        self.getProfile = function (name,cb) {
            if(name){
                userFactory.getProfile(name,cb);
            }
            else {
                function now(err,res) {
                    self.wrap('profile',err,res,res['result'][0],cb);
                }
                if(!self.profile){
                    userFactory.profile(self.name,now);
                }
                else cb(null,self.profile);
            }
        };
        return self;
    }
})();