<template>
	<main id="app">

		<header>
			<div class="overlay">
				<h1 class="title">Chinquiry</h1>
				<h2 class="sub-title">Chinchilla Care Information</h2>
			</div>
		</header>

		<nav-bar />

		<transition name="fade" mode="out-in">
			<router-view class="body-fade" />
		</transition>

		<app-footer />

	</main>
</template>

<script>
	import Home from './views/Home.vue';
	import AppFooter from './components/Footer.vue';
	import NavBar from './components/NavBar.vue';
	import '@/assets/styles.css';

	export default {
		name: 'app',
		components: {
			Home,
			AppFooter,
			NavBar
		},
		created() {
			document.title = 'Chinquiry - Chinchilla Care Information';
		}
	};
</script>

<style lang="scss">
	.body-fade {
		transition: .6s;
	}

	.fade-enter,
	.fade-leave {
		opacity: 0;
	}
</style>
