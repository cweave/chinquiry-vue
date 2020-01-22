module.exports = {
	pluginOptions: {
		prerenderSpa: {
			registry: undefined,
			renderRoutes: [
				'/',
				'/cage-and-habitat',
				'/food-and-treats',
				'/dust-baths',
				'/chinchilla-toys',
				'/disclaimer'
			],
			useRenderEvent: true,
			headless: true,
			onlyProduction: true
		}
	}
};
