<template>
	<main id="app">

		<header>
			<div class="overlay">
				<h1 class="title">Chinquiry</h1>
				<h2 class="sub-title">Chinchilla Care Information</h2>
			</div>
		</header>

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

	<router-view/>

	<footer>
		<p>Copyright {{ new Date().getFullYear() }}</p>
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
	}
}


</script>
