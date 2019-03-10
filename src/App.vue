<template>
	<main id="app">

		<header>
			<div class="overlay">
				<h1 class="title">Chinquiry</h1>
				<h2 class="sub-title">Chinchilla Care Information</h2>
			</div>
		</header>

		<div class="navbar-container">
			<nav class="navbar">
				<button class="navbar-hamburger" id="toggle-nav" :class="{close: menuOpen}" @click="menuOpen=!menuOpen" ref="nav-toggle">
					<span></span>
					<span></span>
					<span></span>
				</button>
				<ul class="navbar-links" v-show="menuOpen">
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
	created () {
		document.title = 'Chinquiry - Chinchilla Care Information'
	},
	components: {
		Home
	},
	watch: {
        $route(to, from) {
            document.title = to.meta.title || 'Chinquiry - Chinchilla Care Information';
        },
    },
	data () {
		return {
			menuOpen: true
		}
	},
  	methods: {
		toggle: function () {
	 		this.menuOpen = !this.menuOpen
		},
		winWidth() {
			const width = window.innerWidth;
			if (width <= 824) {
				this.menuOpen = false
			}
		}
	},
	mounted() {
		this.winWidth(),
		
		document.querySelectorAll('.navbar-links li').addEventListener('click', function () {
		});
	}
}
</script>
