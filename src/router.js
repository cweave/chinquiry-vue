import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import CageHabitat from './components/CageHabitat.vue';
import FoodTreats from './components/FoodTreats.vue';
import DustBath from './components/DustBath.vue';
import ChinchillaToys from './components/ChinchillaToys.vue';
import Disclaimer from './components/Disclaimer.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				title: 'Chinchilla Care Information - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/cage-and-habitat',
			name: 'Cage & Habitat',
			component: CageHabitat,
			meta: {
				title: 'Cage & Habitat - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/food-and-treats',
			name: 'Food & Treats',
			component: FoodTreats,
			meta: {
				title: 'Food & Treats - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/dust-baths',
			name: 'Dust Baths',
			component: DustBath,
			meta: {
				title: 'Dust Baths - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/chinchilla-toys',
			name: 'Chinchilla Toys',
			component: ChinchillaToys,
			meta: {
				title: 'Chinchilla Toys - Chinquiry',
				mainNav: true
			}
		},
		{
			path: '/disclaimer',
			name: 'Disclaimer',
			component: Disclaimer,
			meta: {
				title: 'Disclaimer - Chinquiry',
				footerNav: true
			}
		}
	]
});

export default router;
