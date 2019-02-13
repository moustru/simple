module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'simple',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bug-tracker' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: ['nuxt-sass-resources-loader'],

  sassResources: [
    '@/assets/scss/main.scss'
  ],

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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

  postcss: {
    preset: {
      autoprefixer: {
        browsers: ['ie >= 11', 'last 4 versions']
      }
    }
  },

  css: [
    { src: '@/assets/scss/main.scss', lang: 'scss' },
    { src: '@/assets/scss/config.scss', lang: 'scss' }
  //  '@/assets/scss/main.scss',
  //  '@/assets/scss/config.scss'
  ]
}

