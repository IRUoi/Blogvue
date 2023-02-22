/*
 * @Author: IRUoi pretvorniki@gmail.com
 * @Date: 2023-02-17 16:04:55
 * @LastEditors: IRUoi pretvorniki@gmail.com
 * @LastEditTime: 2023-02-20 15:52:28
 * @FilePath: \blog-vue\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: IRUoi pretvorniki@gmail.com
 * @Date: 2023-02-17 16:04:55
 * @LastEditors: IRUoi pretvorniki@gmail.com
 * @LastEditTime: 2023-02-17 16:13:34
 * @FilePath: \blog-vue\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from './store'
import mavonEditor from 'mavon-editor'
import axios from 'axios'

import "element-ui/lib/theme-chalk/index.css"
import "./axios.js"
import 'mavon-editor/dist/css/index.css'

//引用全局
Vue.prototype.$axios = axios 
Vue.use(Element)
Vue.use(mavonEditor)

Vue.config.productionTip = false
/* eslint-disable */
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
