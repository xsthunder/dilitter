/**
 * Created by xs on 12/24/2017.
 */
// (function () {
//     angular.module('app')
//         .factory('UrlCnst',fn);
//     function fn($http) {
//         var self = {};
//         console.log("hello urlCnst");
//         self.baseUrl = 'http://139.224.114.96:8080/dilitter/';
//         self.post = function (url,obj,cb) {
//             var data ="";
//             for(var i in obj){
//                 if(data)data += '&';
//                 data = data + i + obj[i];
//             }
//             $http.post(self.baseUrl+url, data,{
//                 headers:{'Content-Type':'application/x-www-form-urlencoded'}
//             }).then(function (res) {
//                 cb(null,res.data);
//             },function () {
//                 cb(res);
//             })
//         }
//         return self;
//     }
// });
// (function(){
//     angular.module('app')
//         .factory('urlCnst',fn);
//     function fn($http){
//         self = {};
//         var baseUrl='http://139.224.114.96:8080/dilitter/';
//         self.login = function(name,pwd,cb){
//             $http.post(baseUrl+'login',{
//                 UserName:name,
//                 Password:pwd
//             }).then( function(res){
//                 cb(null,res.data);
//             }, function(res){
//                 cb(res);
//             });
//         }
//         self.getHuawei = function(){
//             $http.get('http://l.lovecust.com/huawei').then(
//                 function(res){
//                     console.log(res);
//                 }, function(res){
//                     console.log(res);
//                 });
//         }
//         self.postHuawei = function(){
//             $http.post('http://l.lovecust.com/huawei',{
//                 data:"hello"
//             }).then(
//                 function(res){
//                     console.log(res);
//                 }, function(res){
//                     console.log(res);
//                 });
//         }
//         return self;
//     }
// })();
