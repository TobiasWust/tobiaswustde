module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Tobias Wust - Websites | Progressive Webapps | SAP ABAP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tobias Wust - Websites | Progressive Webapps | SAP ABAP' },
      { hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, abap, tobias, wust, pwa, progressive, webapp, html5, wordpress' }
    ],
    htmlAttrs: {
      lang: 'de'
    },
    script: [
      /*{ src: 'sw-register.js' }*/
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' }
    ],

  },
  /*pages for transition*/
  router: {
    middleware: 'pages',
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3dba6a' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: [
      async function () {
        try {
          const res = await fetch("https://blog.tobiaswust.de/wp-json/wp/v2/posts/");
          const posts = await res.json();
          this.posts = posts;
          return posts.map((post) => {
            return '/blog/' + post.id
          })
        } catch (e) {
          console.log(e);
        }
      },
      '/blog/sick'
    ]
  }
}
