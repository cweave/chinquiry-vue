<template>
	<footer>
		<p>Copyright &copy; {{ new Date().getFullYear() }} Chinquiry</p>
		<div class="footer-navigation">
			<ul>
				<li v-for="footer in navigationItems" :key="footer.path">
					<router-link :to="footer.path" exact>
						{{ footer.name }}
					</router-link>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'AppFooter',
		data() {
			return {
				routes: this.$router.options.routes
			};
		},
		computed: {
			navigationItems() {
				const result = this.routes.filter(e => e.meta.footerNav === true);
				return result;
			}
		}
	};
</script>
