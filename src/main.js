import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
	id: 'UA-61317148-5',
	router
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
