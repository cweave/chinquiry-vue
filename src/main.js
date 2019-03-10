import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
	id: 'UA-61317148-5',
	router,
	debug: {
		enabled: !isProd,
		sendHitTask: isProd
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
