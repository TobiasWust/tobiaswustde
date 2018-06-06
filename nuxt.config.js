module.exports = {
  /*
  ** Headers of the page
  TODO: FB OG, Structured Data, 
  */
  head: {
    titleTemplate: 'Tobias Wust - %s - Websites | Progressive Webapps | SAP ABAP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'theme-color', content: '#111' },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
      { hid: 'description', name: 'description', content: 'Tobias Wust - Websites | Progressive Webapps | SAP ABAP' },
      { hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, abap, tobias, wust, pwa, progressive, webapp, html5, wordpress' },

    ],
    htmlAttrs: {
      lang: 'de'
    },
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Vidaloka' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'https://github.com/TobiasWust', type: 'text/html' },
      { rel: 'me', href: 'mailto:kontakt@tobiaswust.de' },

    ],
    script: [
      { src: '/sw-register.js' }
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
            return '/blog/' + post.slug
          })
        } catch (e) {
          console.log(e);
        }
      },
      '/blog/sick'
    ],
    fallback: 'true'
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: { // todo: get the sitemap running for dynamic routes
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    /*     async routes() {
          try {
            const res = await fetch("https://blog.tobiaswust.de/wp-json/wp/v2/posts/");
            const posts = await res.json();
            return posts.map((post) => {
              return '/blog/' + post.id
            })
          } catch (e) {
            console.log(e);
          }
        }, */
  }
}
