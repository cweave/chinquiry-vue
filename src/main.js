import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from '@/App';
import router from '@/views/router';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
	id: 'UA-61317148-5',
	router
});

// eslint-disable-next-line no-new
new Vue({
	el: '#app',
	router,
	render: h => h(App),
	mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
	created() {
		const html = document.documentElement;
		html.setAttribute('lang', 'en-US');
	}
});
