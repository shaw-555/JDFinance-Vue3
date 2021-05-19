# 2021 年 5 月 16日
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
