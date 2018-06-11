module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'RemkoCalc',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt boilerplate - bulma flavour'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },



  mode: 'spa',

  css: [
    '~assets/css/marginpaddinghelpers.css',
    '~assets/bulmaCustom/custom/custom.css',
    '~assets/fonts/okomito/stylesheet.css',
  ],


  router: {
    middleware: ['closeReadmore', 'closeMenu'],
    scrollBehavior: function(to, from, savedPosition) {
      if(to.path === '/about' && from.path === '/about'){

      }else{

        if (savedPosition) {
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 10)
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 50)
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 100)
          // return savedPosition
        } else {
          return {
            x: 0,
            y: 0
          }
        }
      }
    }
  },

  modules: [
    //'@nuxtjs/bulma'
  ],

  plugins: [

    //GLOBAL MIXINS
    // '~/mixins/computedresizerglobalmixin.js',

    '~/plugins/lodash-plugin.js',

    {
      src: '~/plugins/vuemq.js',
      ssr: false
    },
    {
      src: '~/plugins/vueawesomeswiper-plugin.js',
      ssr: false
    },
    {
      src: '~/plugins/documentoffset.js',
      ssr: false
    },
    {
      src: '~/plugins/smoothscroll.js',
      ssr: false
    },
    {
      src: '~/plugins/lazyload.js',
      ssr: false
    },
    // {
    //   src: '~/mixins/computedscrollbarwidth.js',
    //   ssr: false
    // },
  ],

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#091540'
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'lodash'],


   styleResources: {
      scss: './assets/sass/variables.scss'
    },


    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
    /*
     ** Run ESLint on save
     */
    // extend(config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  generate: {
    minify: {
      collapseWhitespace: false
    }
  }
}
