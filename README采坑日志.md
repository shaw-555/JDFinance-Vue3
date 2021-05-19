# 2021 年 5 月 16 日
## 1.遇到的报错：
```
[vite] Dep optimization failed with error:
Could not load path (imported by node_modules/node-sass/lib/extensions.js): ENOENT: no such file or directory, open 'path'
```
解决方法：
```
npm install sass -D
```
以及删除 package.json中多余的 ‘,’号

## 2.viewport.js的正确使用及实现移动端自适应：
搞来搞去，新建了一个vue3项目，然后按照网上的教程安装了这两个包
```
npm i px2rem-loade --save-dev
```
```
npm i lib-flexible --save
``` 

# 2021 年 5 月 19 日
1.路由配置
1.安装vue-router
2.创建route文件夹，在router文件夹内创建index.js文件
3.在main.js 内引入 route/index.js 文件 ，并 App.use(router)
4.在route/index.js 内 引入 createRouter 和 createWebHashHistory
5.引入相关组件和输出router
6.在App.vue内的template内调用 <router-view/>

2.实现轮播图
vue-awesome-swiper对vue3支持的不太好
所以使用了swiper。
心得，静下心来读文档很重要
