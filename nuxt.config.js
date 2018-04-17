module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hackWiki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [],
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/styles/main.scss'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
  },
};
