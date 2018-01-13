(function(){
	angular.module('app')
		.component('xxLogin',{
			templateUrl:'/app/login/login.html',
			controller:ctrl
		});
	function ctrl($scope,$state,userService){
		$scope.UserName = 'admin';
		$scope.Password= 'admin';
        $scope.UserName = '';
        $scope.Password= '';
		$scope.login = function(){
			userService.login($scope.UserName,$scope.Password,cb);
			function cb(err,res){
				if(!err)$state.go('user.followee-tweet-list')
			}
		};
		$scope.register = function () {
		    $state.go('register')
        }
	}
})();
