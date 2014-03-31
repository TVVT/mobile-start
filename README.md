# 1号店移动端前端项目自动化工具

请大家做项目之前，先git下本项目

    git clone https://github.com/TVVT/mobile-start.git

删除与git的关联：
    
    rm -rf .git

重命名后使用

    mv mobile-start myProject
    
就可以开始你的项目之旅啦！

## 使用方法

终端里，进入到本文件夹，执行`npm install`安装需要的npm包（尽量使用cnpm：`npm config set registry http://registry.cnpmjs.org`，否则你会想死的赶脚）。安装完毕后，执行`grunt`即可

## 功能：

* 自动编译less为css
* 自动开启source map
* Chrome安装[LiveReload插件](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)，启动`grunt`后点插件图标，空心变实心，自动刷新浏览器
* 项目做完，`grunt publish`自动把html、css、js、images复制到`build`文件夹，提供给开发。（css自动压缩）
