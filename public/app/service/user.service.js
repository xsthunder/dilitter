/**
 * Created by xs on 12/24/2017.
 */
(function () {

    angular.module('app')
        .factory('userService',fn);
    function fn($mdToast,userFactory) {
        var self = {};
        self.profile = null;
        self.name = 'zhang';
        self.followeeList = null;
        self.notice = function (msg) {
            msg = msg||"something wrong";
            $mdToast.show(
                $mdToast.simple()
                    .textContent(msg)
                    .hideDelay(3000)
            );
        };
        self.wrap = function (s,err,res,ans,cb) {
            if(err)self.notice();
            else (err = res['error']);
            if(!err&&s)self[s] = ans;
            if(res['message'])self.notice(res['message']);
            if(ans)res = ans;
            cb(err,res);
        };
        self.register =function (obj,cb) {
            userFactory.register(obj, function (err,res) {
                self.wrap(null,err,res,null,cb);
            });
        };
        self.login = function(name,pwd,cb){
            userFactory.login(name,pwd,function (err,res) {
                self.wrap('name', err,res,name,cb);
            });
        };
        self.getProfile = function (name, cb) {
            if(name){ userFactory.getProfile(name,cb); }
            else {
                function now(err,res) {
                    self.wrap('profile',err,res,res['result'][0],cb);
                }
                if(!self.profile){
                    // TODO 如果允许更新个人profile
                    userFactory.getProfile(self.name,now);
                }
                else cb(null,self.getProfile);
            }
        };
        self.getFolloweeTweetList =function (cb) {
            function now(err,res) {
                if(err)res = [];
                else if (angular.isArray(res)){
                    var ans = [];
                    res.forEach(function (o) {
                        o.forEach(function (v) {
                            ans.push(v);
                        })
                    });
                    res = ans;
                }
                cb(null,res);
            }
            userFactory.getFolloweeTweetList(self.name,function (err,res) {
                self.wrap(null,err,res,res['result'],now)
            });
        };
        self.getFolloweeList = function (name,cb) {
            // 根据推特，不允许查询别人的followee
            name = null;
            if(name){ userFactory.getFolloweeList(name,cb); }
            else {
                function now(err,res) {
                    self.wrap('followeeList',err,res,res['result'],cb);
                }
                if(!self.followeeList){
                    // TODO 如果允许关注用户
                    userFactory.getFolloweeList(self.name,now);
                }
                else cb(null,self.followeeList);
            }
        };
        self.sendTweet = function (obj,cb) {
            obj.userName = self.name;
            function now (err,res) {
                self.wrap(null,err,res,null,cb);
            }
            userFactory.sendTweet(obj,now);
        };
        return self;
    }
})();