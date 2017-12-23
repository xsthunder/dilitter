(function(){
	angular.module('app')
		.component('xxLogin',{
			templateUrl:'/app/login/login.html',
			controller:ctrl
		});
	function ctrl($scope,LoginFactory){
		var info = alert;
		$scope.login = function(){
			LoginFactory.login($scope.UserName,$scope.Password,cb);
			function cb(err,res){
				if(err||res['err']){
					info(res.msg);
				}
				else info(res.msg);
			}
		}
	}
})()
