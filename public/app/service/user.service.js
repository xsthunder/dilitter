/**
 * Created by xs on 12/24/2017.
 */
(function () {

    angular.module('app')
        .service('userService',fn);
    function fn($md,userFactory) {
        var self = this;
        self.profile = null;
        self.name = null;
        self.login = function(name,pwd,cb){
            LoginFactory.login(name,pwd,function (err,res) {
                if(!err){ self.name = name; }
                cb(err,res);
            });
        };
        self.getProfile = function (name) {
            if(name){

            }
            else {
                if(!self.profile){
                    userFactory.profile()
                }
            }
        };
    }
});