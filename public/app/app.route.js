/**
 * Created by xs on 2017/12/26.
 */
'use strict';
(function () {
    angular.module('app')
        .config(fn);
    function fn($stateProvider) {
        var States= [{
            name: 'login',
            url: '/login',
            component:'xxLogin'
        }

        ];
        States.forEach($stateProvider.state);
    }
})();