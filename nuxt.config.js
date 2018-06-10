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
    link: [
      // @ToDo: font & weight selection
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i' },
    ],
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxtjs/axios'],
};
