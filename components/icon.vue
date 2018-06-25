<template>
	<svg v-html="icon"></svg>
</template>

<script>
// List of available icons: https://feathericons.com/
import feather from 'feather-icons';

export default {
	props: {
		name: {
			type: String,
			required: true,
			default: 'x',
		}
	},
	computed: {
		icon() {
			return feather.icons[this.name].contents;
		},
	},
}
</script>


<style scoped>
svg {
	width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;

	cursor: pointer;
}
</style>
