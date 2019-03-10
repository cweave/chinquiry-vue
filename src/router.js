import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import CageHabitat from './components/CageHabitat.vue'
import FoodTreats from './components/FoodTreats.vue'
import DustBath from './components/DustBath.vue'
import LitterTraining from './components/LitterTraining.vue'
import ChinchillaToys from './components/ChinchillaToys.vue'

Vue.use(Router)

const router = new Router({	
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				title: 'Chinchilla Care Information - Chinquiry'
			}
		},
		{
			path: '/cage-and-habitat',
			name: 'Cage & Habitat',
			component: CageHabitat,
			meta: {
				title: 'Cage & Habitat - Chinquiry'
			},
			children: [
				{
					path: '/litter-training',
					name: 'Litter Training',
					component: LitterTraining,
					meta: {
						title: 'Litter Training - Chinquiry'
					},
				}
			]
		},
		{
			path: '/food-and-treats',
			name: 'Food & Treats',
			component: FoodTreats,
			meta: {
				title: 'Food & Treats - Chinquiry'
			},
		},
		{
			path: '/dust-baths',
			name: 'Dust Baths',
			component: DustBath,
			meta: {
				title: 'Dust Baths - Chinquiry'
			},
		},
		{
			path: '/chinchilla-toys',
			name: 'Chinchilla Toys',
			component: ChinchillaToys,
			meta: {
				title: 'Chinchilla Toys - Chinquiry'
			},
		}
	]
});
export default router;
