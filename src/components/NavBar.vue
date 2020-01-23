<template>
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
</template>

<script>

	export default {
		name: 'NavBar',
		data() {
			return {
				menuOpen: true,
				windowWidth: window.innerWidth
			};
		},
		created() {
			document.title = 'Chinquiry - Chinchilla Care Information';

			window.addEventListener('resize', this.checkForWidthChange);
			this.handleResize();
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
		computed: {
			routerLoop() {
				return this.$router.options.routes;
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
		}
	};
</script>
