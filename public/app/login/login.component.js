(function(){
	angular.module('app')
		.component('xxLogin',{
			templateUrl:'/app/login/login.html',
			controller:ctrl
		});
	function ctrl($scope,userService){
		$scope.UserName = 'admin';
		$scope.Password= 'admin';
		$scope.login = function(){
			userService.login($scope.UserName,$scope.Password,cb);
			function cb(err,res){
			}
		}
	}
})();
