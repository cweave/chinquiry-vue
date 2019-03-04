import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import CageHabitat from './components/CageHabitat.vue'
import FoodTreats from './components/FoodTreats.vue'
import DustBath from './components/DustBath.vue'
import LitterTraining from './components/LitterTraining.vue'
import ChinchillaToys from './components/ChinchillaToys.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/cage-and-habitat',
			name: 'Cage & Habitat',
			component: CageHabitat,
			children: [
				{
					path: '/litter-training',
					name: 'Litter Training',
					component: LitterTraining
				}
			]
		},
		{
			path: '/food-and-treats',
			name: 'Food & Treats',
			component: FoodTreats
		},
		{
			path: '/dust-baths',
			name: 'Dust Baths',
			component: DustBath
		},
		{
			path: '/chinchilla-toys',
			name: 'Chinchilla Toys',
			component: ChinchillaToys
		}
	]
})
