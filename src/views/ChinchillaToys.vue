<template>
	<section>
		<h1>Chinchilla Toys</h1>
		<p>Chinchillas have teeth that grow continuously over their whole life span. Gnawing and chewing on things keep their teeth trimmed and in good condition. This is a natural and necessary activity for pet chinchillas. Having access to plenty of toys ensures optimal teeth health for your chinchilla – not to mention it also satisfies their curiosity and keeps them entertained.</p>

		<h2>Chinchilla Chew Toys</h2>
		<p>Wood toys such as tree branches, twigs, or manufactured wood pieces are safe for chinchillas. It is important the wood is untreated and pesticide free. You can purchase chinchilla chew toys in the rodent sections of pet stores, or rope and wood toys found in the bird section. Some chinchillas will chew on pumice stones, mineral blocks, and salt licks. Salt licks also aid in healthy digestion.</p>

		<h3>Safe Woods:</h3>
		<ul>
			<li v-for="wood in safeWoods" :key="wood.id">{{ wood }}</li>
		</ul>

		<h3>Hazardous Woods</h3>
		<ul>
			<li v-for="wood in hazardousWoods" :key="wood.id">{{ wood }}</li>
		</ul>

		<h2>Other Safe Toys</h2>
		<p>Other toys for chinchillas include wheels for running (solid and attached to the cage), PVC pipes, cardboard boxes, ladders, blocks, tubes, and many other endless items. It is important to be aware of the materials that are composed in your chinchilla’s toys, as some can be harmless.</p>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				safeWoods:
					[
						'Wood from fruit baring trees (apple, grape, pear, etc.)', 'Aspen', 'Cottonwood', 'Crabapple', 'Poplar', 'Willow'
					],
				hazardousWoods:
					[
						'Wood from fruit trees with seeds/pits (cherry, peaches, etc.)', 'Cedar', 'Chesnut', 'Citrus fruit trees (lemon, orange, grapefruit, etc.)', 'Evergreen', 'Fir', 'Redwood'
					]
			};
		}
	};

</script>
