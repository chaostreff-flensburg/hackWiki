<template>
  <section>
    <ssrLoader v-if="!isHydrated" :doc="page.doc"></ssrLoader>

    <editor v-if="isHydrated" :doc="page.doc" 
      @docUpdated="updateState($event)">
    </editor>
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
  async asyncData({ app }) {
    // @ToDo: fetch page based on slug
    let page = await app.$axios.$get('/api/docs?[$limit]=1')
      .then(res => {
        return res.data[0];
      })
    return { 
      page,
      isHydrated: false,
    };
  },
  mounted() {
    this.isHydrated = true;
  },
  methods: {
    updateState(newDoc) {
      this.page.doc = { ...this.page.doc, ...newDoc};
    },
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
