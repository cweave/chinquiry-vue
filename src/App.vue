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
					<li v-for="parent in routerLoop" :key="parent.path" v-if="parent.meta.mainNav">
						<router-link :to="parent.path" exact>
							{{ parent.name }}
						</router-link>
						<ul class="navbar-sublinks" v-if="parent.children">
							<li v-for="child in parent.children" :key="child.path">
								<router-link :to="{path : parent.path + '/' + child.path}" exact>
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
			<p>Copyright © {{ new Date().getFullYear() }} Chinquiry</p>
			<div class="footer-navigation">
				<ul>
					<li v-for="footer in routerLoop" :key="footer.path" v-if="footer.meta.footerNav">
						<router-link :to="footer.path" exact>
							{{ footer.name }}
						</router-link>
					</li>
				</ul>
			</div>
		</footer>

	</main>
</template>

<script>
	import Home from './components/Home.vue';
	import '@/assets/styles.css';

	export default {
		name: 'app',
		created() {
			document.title = 'Chinquiry - Chinchilla Care Information';

			window.addEventListener('resize', this.checkForWidthChange);
			this.handleResize();
		},
		components: {
			Home
		},
		data() {
			return {
				menuOpen: true,
				windowWidth: window.innerWidth
			};
		},
		watch: {
			// eslint-disable-next-line
			$route(to, from) {
				document.title = to.meta.title || 'Chinquiry - Chinchilla Care Information';
				if (window.innerWidth <= 824) {
					this.menuOpen = false;
				}
			}
		},
		methods: {
			toggle() {
				this.menuOpen = !this.menuOpen;
			},
			checkForWidthChange() {
				if (window.innerWidth !== this.windowWidth)
					this.handleResize();
			},
			handleResize() {
				if (window.innerWidth <= 824) {
					this.menuOpen = false;
				}
				else {
					this.menuOpen = true;
				}
			}
		},
		computed: {
			routerLoop() {
				return this.$router.options.routes;
			}
		}
	};
</script>
