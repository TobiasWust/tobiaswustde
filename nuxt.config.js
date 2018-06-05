module.exports = {
  /*
  ** Headers of the page
  TODO: FB OG, Structured Data, 
  */
  head: {
    titleTemplate: '%s - Tobias Wust - Websites | Progressive Webapps | SAP ABAP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'theme-color', content: '#3dba6a' },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
      { hid: 'description', name: 'description', content: 'Tobias Wust - Websites | Progressive Webapps | SAP ABAP' },
      { hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, abap, tobias, wust, pwa, progressive, webapp, html5, wordpress' },

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
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'https://github.com/TobiasWust', type: 'text/html' },
      { rel: 'me', href: 'mailto:kontakt@tobiaswust.de' },

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
