import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap'
import './plugins/fontawesome'
import './plugins/clipboard2'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
