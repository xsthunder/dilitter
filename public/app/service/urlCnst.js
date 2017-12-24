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
            for(var i in obj){
                if(data)data += '&';
                data = data + i +'='+ obj[i];
            }
            $http.post(self.baseUrl+url, data,{
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            }).then(function (res) {
                cb(null,res.data);
            },function () {
                cb(res);
            })
        };
        return self;
    }
})();