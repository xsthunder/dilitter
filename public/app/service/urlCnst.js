/**
 * Created by xs on 12/24/2017.
 */
(function () {
    angular.module('app')
        .factory('urlCnst',fn);
    function fn($http) {
        var self = {};
        self.baseUrl = 'http://139.224.114.96:8080/dilitter/';
        self.get = function (url,cb) {
            $http.get(self.baseUrl+url)
                .then(function (res) {
                    cb(null,res.data);
                },cb(res));
        };
        self.post = function (url,obj,cb) {
            var data ="";
            $http.post(self.baseUrl+url, obj,{
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                transformRequest:function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            }).then(function (res) {
                cb(null,res.data);
            },function () {
                cb(res);
            })
        };
        return self;
    }
})();