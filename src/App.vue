<template>
	<main id="app">

		<header>
			<div class="overlay">
				<h1 class="title">Chinquiry</h1>
				<h2 class="sub-title">Chinchilla Care Information</h2>
			</div>
		</header>

		<div class="navbar-container">
			<button class="navbar-hamburger" v-on:click='isOpen = !isOpen'>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<nav class="navbar">
				<ul class="navbar-links" v-show="isOpen">
					<li><router-link to="/" exact>Home</router-link></li>
					<li><router-link to="/cage-and-habitat" exact>Cage &amp; Habitat</router-link>
						<ul class="navbar-sublinks">
							<router-link to="/cage-and-habitat" exact>Litter Training</router-link>
						</ul>
					</li>
					<li><router-link to="/food-and-treats" exact>Food &amp; Treats</router-link></li>
					<li><router-link to="/dust-baths" exact>Dust Baths</router-link></li>
					<li><router-link to="/safe-toys" exact>Safe Toys</router-link></li>
				</ul>
			</nav>
		</div>

	<router-view/>

	<footer>
		<p>Copyright year © {{ new Date().getFullYear() }}</p>
	</footer>

	</main>
</template>

<script>
import Home from './components/Home.vue'
import '@/assets/styles.css';

export default {
	name: 'app',
	components: {
		Home
	},
	data () {
		return {
			isOpen: true
		  }
	},
  	methods: {
    	toggle: function () {
      		this.isOpen = !this.isOpen
   		}
  	}
}
</script>
