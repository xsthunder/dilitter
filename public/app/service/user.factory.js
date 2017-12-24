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
		self.profile = function (name,cb) {
			urlCnst.post('show-users',{
				UserName:name
            },cb);
        };
		self.getAllUsers = function (cb) {
		    urlCnst.get('show-users',cb);
        };
		return self;
	}
})();
