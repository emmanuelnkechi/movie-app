import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL = 

Vue.config.productionTip = false
 export const eventBus= ({
   methods: {
     
   }
 })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
