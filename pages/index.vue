<template>
  <section>
    <ssrLoader v-if="!isHydrated" :doc="$store.state.docs.copy.doc"></ssrLoader>

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
import ssrLoader from '~/components/utils/ssr-loader.vue';

export default {
  components: {
    ssrLoader,
  },
  asyncData() {
    return { isHydrated: false };
  },
  mounted() {
    initEditor(this.$store);
    this.isHydrated = true;
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
