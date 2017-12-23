'use strict';
(function(){
	angular.module( 'app')
		.controller( 'helloCtrl',ctrl);
	function ctrl($scope){
		$scope.name = "123";
	}
})()
