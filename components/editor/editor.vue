<template>
	<main id="editor"></main>
</template>

<script>
import Mobiledoc from 'mobiledoc-kit';
import debounce from 'lodash/debounce';

export default {
	props: {
		doc: {
			type: Object,
			required: true,
		},
	},
	mounted() {
		const element = document.querySelector('#editor');
		const options = { mobiledoc: this.$store.state.docs.copy.doc };
		const editor = new Mobiledoc.Editor(options);
		editor.render(element);

		editor.didUpdatePost(postEditor => {
			this.docUpdated(editor.mobiledoc);
		});
  },
	methods: {
		docUpdated: debounce(function(doc) {
			this.$emit('docUpdated', doc);
		}, 300),
	}
}
</script>
