<template>
	<main id="app">

		<header>
			<div class="overlay">
				<h1 class="title">Chinquiry</h1>
				<h2 class="sub-title">Chinchilla Care Information</h2>
			</div>
		</header>

		<nav>
			<ul>
				<li><router-link to="/" exact>Home</router-link></li>
				<li><router-link to="/cage-and-habitat" exact>Cage &amp; Habitat</router-link></li>				
				<li><router-link to="/food-and-treats" exact>Food &amp; Treats</router-link></li>
			</ul>
		</nav>

	<router-view/>

	<footer>
		<p>Copyright year</p>
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
