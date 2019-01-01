import Vue from 'vue'
import App from './App.vue'
import './styles/bootstrap.min.css'
import './styles/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
