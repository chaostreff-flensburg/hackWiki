<template>
	<main id="editor"></main>
</template>

<script>
import Mobiledoc from 'mobiledoc-kit';

function initEditor(store) {
  const element = document.querySelector('#editor');
  const options = { mobiledoc: store.state.docs.copy.doc };
  const editor = new Mobiledoc.Editor(options);
  editor.render(element);
}

export default {
	props: {
		doc: {
			type: Object,
			required: true,
		},
	},
	mounted() {
    initEditor(this.$store);
  },
}
</script>
