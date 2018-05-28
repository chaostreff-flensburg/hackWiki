<template>
  <section>
    <ssrLoader v-if="!isHydrated" :doc="$store.state.docs.copy.doc"></ssrLoader>

    <editor v-if="isHydrated" :doc="$store.state.docs.copy.doc"></editor>
  </section>
</template>

<script>
import ssrLoader from '~/components/utils/ssr-loader.vue';
import editor from '~/components/editor/editor.vue';

export default {
  components: {
    ssrLoader,
    editor,
  },
  async fetch({ store }) {
    // @ToDo: fetch page based on slug
    let params = {query: {}}
    await store.dispatch('docs/find', params)
      .then(res => {
        store.commit('docs/setCurrent', res.data[0]._id);
      });
  },
  asyncData() {
    return { isHydrated: false };
  },
  mounted() {
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
