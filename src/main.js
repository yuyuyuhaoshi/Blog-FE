import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './styles/bootstrap.min.css'
import './styles/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
