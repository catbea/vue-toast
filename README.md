# vue-toast-plugin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

安装组件  npm update vue-toast-plugin-catbea --save

安装完以后，在项目中引用

在入口文件中引入

import Toast from 'vue-toast-plugin-catbea'

Vue.use(Toast);

在需要用到的组件中这样使用就ok啦<toast :toastMsg="toastMsg" :isSHowToast="isSHowToast"></toast>
