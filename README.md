# AngluarJS MVC template with component 
[编程规范](https://github.com/mgechev/angularjs-style-guide/blob/master/README-zh-cn.md)
[angularjs doc](https://angularjs.org/)
[angularjs material](https://material.angularjs.org/latest/)
[路由ui-router 选angluarjs(angular1](http://ui-router.github.io/)
* 多人协作推荐使用业务功能优先的目录结构
* 优先使用npm <lib> --save,以便保存依赖,额外的库放在lib
* 设置git和编辑器,使用linux格式换行符及utf-8文件编码
* 完成一个功能就push
* 多人协作使用git branch, 每人在各自branch负责模块

## installation and run
### depend
* [nodejs]() for static server
### run
`npm i`安装好依赖,依赖装不上就用[cnpm](http://npm.taobao.org/)
`npm test`
浏览器打开http://localhost:8080/
>
./service放facotry(与服务器交互)和service(与factory和controller的中间层)和./user放整体视图
其他都是component
.
├── [   0]  app
│   ├── [ 366]  app.module.js
│   ├── [ 270]  app.route.js //配置路由
│   ├── [   0]  common
│   │   └── [ 390]  style.css
│   ├── [   0]  edit-user-list
│   │   ├── [ 798]  edit-user-list.component.js
│   │   └── [1.3K]  edit-user-list.html
│   ├── [   0]  followee-list
│   │   ├── [ 620]  followee-list.component.js
│   │   └── [ 335]  followee-list.html
│   ├── [   0]  followee-tweet-list
│   │   ├── [ 841]  followee-tweet-list.component.js
│   │   └── [1.6K]  followee-tweet-list.html
│   ├── [   0]  login
│   │   ├── [ 538]  login.component.js
│   │   └── [ 901]  login.html
│   ├── [   0]  person-info
│   │   ├── [ 525]  person-info.component.js
│   │   └── [ 528]  person-info.html
│   ├── [   0]  register
│   │   ├── [1.3K]  register.component.js
│   │   └── [1.9K]  register.html
│   ├── [   0]  send-tweet
│   │   ├── [ 744]  send-tweet.component.js
│   │   └── [ 955]  send-tweet.html
│   ├── [   0]  service
│   │   ├── [1.3K]  ROUTER_CONSTANT.js //具体路由配置参数
│   │   ├── [1.1K]  urlCnst.js
│   │   ├── [1.2K]  user.factory.js
│   │   └── [4.4K]  user.service.js
│   ├── [   0]  sidenav
│   ├── [   0]  toolbar
│   │   ├── [1.1K]  toolbar.component.js
│   │   └── [ 381]  toolbar.html
│   └── [   0]  user
│       ├── [1.3K]  leftCtrl.js
│       ├── [1.1K]  user.component.js
│       └── [1.4K]  user.html
├── [2.2K]  index.html
└── [   0]  lib

14 directories, 27 files
