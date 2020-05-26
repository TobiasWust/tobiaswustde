module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Tobias Wust - %s - Wordpress Beratung | Fullstack Entwicklung | MEVN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'theme-color', content: '#111' },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
      { hid: 'description', name: 'description', content: 'Wordpress Beratung | Fullstack Entwicklung | MEVN' },
      { hid: 'keywords', name: 'keywords', content: 'vuejs, nuxt, javascript, mevn, fullstack, beratung, tobias, wust, pwa, progressive, webapp, html5, wordpress' },

    ],
    htmlAttrs: {
      lang: 'de'
    },
    link: [
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Vidaloka' },
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //{ rel: 'manifest', href: '/manifest.json' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'https://github.com/TobiasWust', type: 'text/html' },
    ],
    script: [
      //{ src: '/sw-register.js' }
    ],
  },
  css: [
    '~/assets/css/main.css',
  ],
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
    fallback: "404.html"
  },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.tobiaswust.de',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
  },
  manifest:
  {
    "dir": "ltr",
    "lang": "de",
    "name": "Tobias Wust",
    "scope": "/",
    "display": "minimal-ui",
    "start_url": "/",
    "short_name": "Wust",
    "theme_color": "transparent",
    "description": "Website von Tobias Wust",
    "orientation": "any",
    "background_color": "#111",
    "related_applications": [],
    "prefer_related_applications": false,
    "icons": [
      {
        "src": "favicon.ico",
        "sizes": "16x16"
      }
    ]
  }
}
