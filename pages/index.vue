<template>
  <section>

    <main id="editor"></main>
  </section>
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
  mounted() {},
  mounted() {
    initEditor(this.$store);
  },
};
</script>

<style scoped>
section {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
</style>
