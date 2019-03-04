<template>
	<main id="app">

		<header>
			<div class="overlay">
				<h1 class="title">Chinquiry</h1>
				<h2 class="sub-title">Chinchilla Care Information</h2>
			</div>
		</header>

		<div class="navbar-container">
			<nav class="navbar navbar-desktop">
				<ul class="navbar-links">
					<li v-for="parent in $router.options.routes" :key="parent.path">
						<router-link :to="parent.path" exact>
							{{ parent.name }}
						</router-link>
						<ul class="navbar-sublinks">
							<li v-for="child in parent.children" :key="child.path">
								<router-link :to="child.path" exact>
									{{ child.name }}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>

			<!-- TODO: refactor this bad boy -->
			<responsive-nav class="navbar navbar-mobile">

				<button class="navbar-hamburger" :class="{close: menuOpen}" @click="menuOpen=!menuOpen">
					<span></span>
					<span></span>
					<span></span>
				</button>

				<ul class="navbar-links" v-show="menuOpen">
					<li><router-link to="/" exact>Home</router-link></li>
					<li><router-link to="/cage-and-habitat" exact>Cage &amp; Habitat</router-link>
						<ul class="navbar-sublinks">
							<router-link to="/cage-and-habitat" exact>Litter Training</router-link>
						</ul>
					</li>
					<li><router-link to="/food-and-treats" exact>Food &amp; Treats</router-link></li>
					<li><router-link to="/dust-baths" exact>Dust Baths</router-link></li>
					<li><router-link to="/chinchilla-toys" exact>Chinchilla Toys</router-link></li>
				</ul>
			</responsive-nav>
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
			menuOpen: false
		}
	},
  	methods: {
    	toggle: function () {
     		this.menuOpen = !this.menuOpen
   		}
	  },
	   mounted() {
      console.log({router: this.$router.options});
    }
}
</script>
