(function(){
	angular.module('app')
		.component('xxLogin',{
			templateUrl:'/app/login/login.html',
			controller:ctrl
		});
	function ctrl($scope,urlCnst){
		var info = alert;
		$scope.UserName = 'admin';
		$scope.Password= 'admin';
		$scope.login = function(){
			//userService.login($scope.UserName,$scope.Password,cb);
			function cb(err,res){
				if(err||res['err']){
					info(res.message);
				}
				else info(res.message);
			}
		}
	}
})();
