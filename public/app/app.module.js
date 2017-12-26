'use strict';
(function(){
	angular.module('app',['ngMaterial', 'ngMessages'])
		.config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        })
})();
