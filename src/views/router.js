import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import(/* webpackChunkName: 'Home' */ '@/views/Home'),
			meta: {
				title: 'Chinchilla Care Information - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/cage-and-habitat',
			name: 'Cage & Habitat',
			component: () => import(/* webpackChunkName: 'CageHabitat' */ '@/views/CageHabitat'),
			meta: {
				title: 'Cage & Habitat - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/food-and-treats',
			name: 'Food & Treats',
			component: () => import(/* webpackChunkName: 'FoodTreats' */ '@/views/FoodTreats'),
			meta: {
				title: 'Food & Treats - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/dust-baths',
			name: 'Dust Baths',
			component: () => import(/* webpackChunkName: 'DustBath' */ '@/views/DustBath'),
			meta: {
				title: 'Dust Baths - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/chinchilla-toys',
			name: 'Chinchilla Toys',
			component: () => import(/* webpackChunkName: 'ChinchillaToys' */ '@/views/ChinchillaToys'),
			meta: {
				title: 'Chinchilla Toys - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/disclaimer',
			name: 'Disclaimer',
			component: () => import(/* webpackChunkName: 'Disclaimer' */ '@/views/Disclaimer'),
			meta: {
				title: 'Disclaimer - Chinquiry',
				footerNav: true
			}
		}
	]
});
