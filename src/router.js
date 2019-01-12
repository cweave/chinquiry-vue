import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import CageHabitat from './components/CageHabitat.vue';
import FoodTreats from './components/FoodTreats.vue';
import DustBath from './components/DustBath.vue';
import ChinchillaToys from './components/ChinchillaToys.vue';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/cage-and-habitat',
			name: 'cage-and-habitat',
			component: CageHabitat
		},
		{
			path: '/food-and-treats',
			name: 'food-and-treats',
			component: FoodTreats
		},
		{
			path: '/dust-bath',
			name: 'dust-bath',
			component: DustBath
		},
		{
			path: '/chinchilla-toys',
			name: 'chinchilla-toys',
			component: ChinchillaToys
		}
	]
})