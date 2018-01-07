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
            url: '/user/person-info/{userName}',
            component: 'xxPersonInfo'
        }, {
            name: 'user.edit-user-list',
            url: '/user/edit-user-list',
            component: 'xxEditUserList'
        }, {
            name:'user.admin-tweet-list',
            url:'/user/admin-tweet-list',
            component:'xxAdminTweetList'
        },
        {
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