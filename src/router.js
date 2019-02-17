import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import CageHabitat from './components/CageHabitat.vue'
import FoodTreats from './components/FoodTreats.vue'
import DustBath from './components/DustBath.vue'
import LitterTraining from './components/LitterTraining.vue'
import SafeToys from './components/SafeToys.vue'

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
<<<<<<< HEAD
			path: '/dust-baths',
			name: 'dust-baths',
			component: DustBath
		},
		{
			path: '/litter-training',
			name: 'litter-training',
			component: LitterTraining
		},
		{
			path: '/safe-toys',
			name: 'safe-toys',
			component: SafeToys
=======
			path: '/dust-bath',
			name: 'dust-bath',
			component: DustBath
		},
		{
			path: '/chinchilla-toys',
			name: 'chinchilla-toys',
			component: ChinchillaToys
>>>>>>> d8c6e32389bf61dd2c92958bc3b692f66ff21d0a
		}
	]
})
