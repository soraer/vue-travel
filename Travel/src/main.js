// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 安装fastclick 解决移动端点击300毫秒延时问题
import './assets/styles/reset.css'  //重置不同手机得默认值不同问题
import './assets/styles/border.css'  //解决移动端1像素边框问题

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
