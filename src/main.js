import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.less'
import '@/assets/css/common.less'
// import '@/assets/fonts/iconfont.css'
import _ from 'lodash'
Vue.prototype._ = _


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import Antd from 'ant-design-vue'
// Vue.use(Antd);



// import Vfd from "vfd";
// Vue.use(Vfd)

// import AvueFormDesign from '../packages/';
// import AvueUeditor from 'avue-plugin-ueditor'

// Vue.use(window.AVUE)
// Vue.use(AvueFormDesign)
// Vue.use(AvueUeditor)


import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 1：开发    2：用户
// window.userId = 1;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
