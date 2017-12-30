/**
 * Created by xs on 12/24/2017.
 */
(function () {

        angular.module('app')
            .factory('userService', fn);

        function fn($mdToast, $state, userFactory) {
            var self = {};
            self.name = 'zhang';
            // self.name = 'Dylan';
            self.followeeList = null;
            self.personInfo = function (name) {
                $state.go('user.person-info', {"userName": name || self.name});
            };
            self.notice = function (msg) {
                msg = msg || "something wrong";
                $mdToast.show(
                    $mdToast.simple()
                        .textContent(msg)
                        .hideDelay(3000)
                );
            };
            self.wrap = function (s, err, res, ans, cb) {
                if (err) self.notice();
                else (err = res['error']);
                if (!err && s) self[s] = ans;
                if (!err&&res['message']) self.notice(res['message']);
                if (ans) res = ans;
                cb(err, res?(res['result'] || res):null);
            };
            self.register = function (obj, cb) {
                userFactory.register(obj, function (err, res) {
                    self.wrap(null, err, res, null, cb);
                });
            };
            self.login = function (name, pwd, cb) {
                userFactory.login(name, pwd, function (err, res) {
                    self.wrap('name', err, res, name, cb);
                });
            };
            self.getProfile = function (name, cb) {
                function now(err, res) {
                    self.wrap(null, err, res, res['result'], cb);
                }

                // TODO 如果允许更新个人profile
                userFactory.getProfile(self.name, now);
            };
            self.getTweetList = function (name, cb) {
                function now(err, res) {
                    if (err) res = [];
                    if (!res.length) self.notice("No tweets currently");
                    cb(err, res);
                }

                userFactory.getTweetList(name, function (err, res) {
                    self.wrap(null, err, res, res['result'], now)
                });
            };
            self.getFolloweeTweetList = function (cb) {
                function now(err, res) {
                    if (err) res = [];
                    else if (angular.isArray(res)) {
                        var ans = [];
                        res.forEach(function (o) {
                            o.forEach(function (v) {
                                ans.push(v);
                            })
                        });
                        res = ans;
                    }
                    if (!res.length) self.notice("No tweets currently");
                    cb(null, res);
                }

                userFactory.getFolloweeTweetList(self.name, function (err, res) {
                    self.wrap(null, err, res, res['result'], now)
                });
            };
            self.getFolloweeList = function (name, cb) {
                // 根据推特，不允许查询别人的followee
                name = null;
                if (name) {
                    userFactory.getFolloweeList(name, cb);
                }
                else {
                    function now(err, res) {
                        self.wrap('followeeList', err, res, res['result'], cb);
                    }

                    if (!self.followeeList) {
                        // TODO 如果允许关注用户
                        userFactory.getFolloweeList(self.name, now);
                    }
                    else cb(null, self.followeeList);
                }
            };
            self.sendTweet = function (obj, cb) {
                obj.userName = self.name;

                function now(err, res) {
                    self.wrap(null, err, res, null, cb);
                }

                userFactory.sendTweet(obj, now);
            };
            self.showUserList = function (cb) {
                function now(err,res) {
                    self.wrap(null,err,res,null,cb);
                }
                userFactory.showUserList(now);
            };
            self.deleteUser = function (name,cb) {
                function now(err,res) {
                    self.wrap(null,err,res,null,cb);
                }
                userFactory.deleteUser(name,now);
            };
            return self;
        }
    }

)();