(function(){
	angular.module('app')
		.factory('userFactory',fn);
	function fn(urlCnst){
		var self = {};
		self.login = function(name,pwd,cb){
		    urlCnst.post('login',{
                userName:name,
                password:pwd
			},cb);
		};
		self.getProfile = function (name, cb) {
			urlCnst.post('show-users',{
				UserName:name
            },cb);
        };
		self.getAllUsers = function (cb) {
		    urlCnst.get('show-users',cb);
        };
		self.register = function (obj,cb) {
		    urlCnst.post('register',obj,cb);
        };
		self.getFolloweeList = function (name,cb) {
		    urlCnst.post('show-followees',{FollowerName:name},cb);
        };
		self.getFolloweeTweetList = function (name,cb) {
			urlCnst.post('show-followee-tweets',{FollowerName:name},cb)
        };
		self.sendTweet = function (obj,cb) {
		    urlCnst.post('send-tweet',obj,cb);
        };
		self.getTweetList = function (name,cb) {
		    urlCnst.post('show-tweets',{UserName:name},cb);
        };
		self.showUserList = function (cb) {
		    urlCnst.get('show-users',cb);
        };
		self.deleteUser = function (name,cb) {
		    urlCnst.post('delete',{UserName:name},cb);
        };
		self.showAdminTweetList = function (cb) {
		    urlCnst.get('show-tweets-admin',cb);
        };
        self.showAdminTweetListInRange = function (start,end,cb) {
            urlCnst.post('show-tweets-admin',{startTime:start,endTime:end},cb);
        };
		return self;
	}
})();
