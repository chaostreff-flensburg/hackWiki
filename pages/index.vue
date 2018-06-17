<template>
  <section>

    <component :is="docMode"
      :doc="page.doc"
      @docUpdated="updateState($event)"
    ></component>

    <button @click="saveDoc()">save</button>
    <button @click="mode = 'editor'">edit</button>
  </section>
</template>

<script>
import ssrLoader from '~/components/utils/ssr-loader.vue';

export default {
  components: {
    ssrLoader,
    editor: () => import('~/components/editor/editor.vue' /* webpackChunkName: "components/editor" */),
  },
  async asyncData({ app }) {
    // @ToDo: fetch page based on slug
    let page = await app.$axios.$get('/api/docs?[$limit]=1')
      .then(res => {
        return res.data[0];
      })
    return { 
      page,
      mode: 'ssrLoader',
    };
  },
  methods: {
    updateState(newDoc) {
      this.page.doc = { ...newDoc };
    },
    saveDoc() {
      this.$axios.$patch(`/api/docs/${this.page._id}`, this.page);
    },
  },
  computed: {
    docMode() {
      return this.mode;
    }
  },
};
</script>

<style scoped>
section {
  max-width: 720px;

  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
}
</style>
