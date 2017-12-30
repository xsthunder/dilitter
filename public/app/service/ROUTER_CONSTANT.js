(function () {
    var States = [
        {
            name: 'login',
            url: '/login',
            component: 'xxLogin'
        },
        {
            name: 'register',
            url: '/register',
            component: 'xxRegister'
        }, {
            name: 'user',
            usl: '/user',
            component: 'xxUser'
        },
        {
            name: 'user.followee-list',
            url: '/user/followee-list',
            component: 'xxFolloweeList'
        },
        {
            name: 'user.followee-tweet-list',
            url: '/user/followee-tweet-list',
            component: 'xxFolloweeTweetList'
        }, {
            name: 'user.send-tweet',
            url: '/user/send-tweet',
            component: 'xxSendTweet'
        }, {
            name: 'user.person-info',
            url: '/user/person-info',
            component: 'xxPersonInfo'
        }, {
            name: "otherwise",
            url: "*path",
            controller: function ($state) {
                $state.go('login');
            }

        }
    ];
    angular.module('app')
        .constant('ROUTER_CONSTANT', States);
})();