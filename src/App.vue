<template>
	<main id="app">

		<header>
			<div class="overlay">
				<h1 class="title">Chinquiry</h1>
				<h2 class="sub-title">Chinchilla Care Information</h2>
			</div>
		</header>

<<<<<<< HEAD
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
=======
		<nav class="navbar">
			<span class="navbar-toggle">
				<svg id="js-navbar-toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
			</span>
			<ul class="main-nav" id="js-menu">
				<li><router-link to="/" exact>Home</router-link></li>
				<li><router-link to="/cage-and-habitat" exact>Cage &amp; Habitat</router-link></li>
				<li><router-link to="/food-and-treats" exact>Food &amp; Treats</router-link></li>
				<li><router-link to="/dust-bath" exact>Dust Baths</router-link></li>								
				<li><router-link to="/chinchilla-toys" exact>Safe Toys</router-link></li>
			</ul>
		</nav>
>>>>>>> d8c6e32389bf61dd2c92958bc3b692f66ff21d0a

	<router-view/>

	<footer>
<<<<<<< HEAD
		<p>Copyright year © {{ new Date().getFullYear() }}</p>
=======
		<p>Copyright {{ new Date().getFullYear() }}</p>
>>>>>>> d8c6e32389bf61dd2c92958bc3b692f66ff21d0a
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
<<<<<<< HEAD
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
=======
	}
>>>>>>> d8c6e32389bf61dd2c92958bc3b692f66ff21d0a
}


</script>
