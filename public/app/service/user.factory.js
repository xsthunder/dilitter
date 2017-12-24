(function(){
	angular.module('app')
		.factory('userFactory',fn);
	function fn(urlCnst){
		var self = {};
		self.login = function(name,pwd,cb){
		    urlCnst.post('login',{
		        UserName:name,
				pwd:Password
			},cb);
		};
		return self;
	}
})();
