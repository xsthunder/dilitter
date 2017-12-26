(function(){
	angular.module('app')
		.factory('userFactory',fn);
	function fn(urlCnst){
		var self = {};
		self.login = function(name,pwd,cb){
		    urlCnst.post('login',{
		        UserName:name,
				Password:pwd
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
		    urlCnst.post('show-users',{UserName:name},cb);
        };
		return self;
	}
})();
