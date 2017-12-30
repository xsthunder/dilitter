'use strict';
(function(){
	angular.module('app',['ngMaterial', 'ngMessages','ui.router'])
		.config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        })
})();
