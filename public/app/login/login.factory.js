(function(){
	angular.module('app')
		.factory('LoginFactory',fn);
	function fn($http){
		self = {};
		var baseUrl='http://139.224.114.96:8080/dilitter/';
		self.login = function(name,pwd,cb){
			$http.post(baseUrl+'login',{
				UserName:name,
				Password:pwd
			}).then( function(res){
				cb(null,res.data);
			}, function(res){
				cb(res);
			});
		}
		return self;
	}
})();
