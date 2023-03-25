export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'aronsgelauff-architecten',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
      { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
      { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Overpass&family=Playfair+Display&display=swap'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/style/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: "~/plugins/multi-select", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIREBASE_APIKEY,
          authDomain: "arons-en-gelauff.firebaseapp.com",
          projectId: "arons-en-gelauff",
          storageBucket: "arons-en-gelauff.appspot.com",
          messagingSenderId: "376357913280",
          appId: "1:376357913280:web:f8b65c7aeab1f4de48e325",
          measurementId: "G-3B4G50WW4E"
        },
        services: {
          analytics: {
            collectionEnabled: true // default
          }
        }
      }
    ]
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  styleResources: {
    scss: [
      '~/assets/style/variables.scss',
    ]
  },
  pageTransition: {
    appear: true,
    enter(el, done){
      const tl = this.$gsap.timeline({
        onComplete: function (){
          done()
        }
      })
      tl.to('#loader',{marginLeft: '100%', duration: 0.7})
    },
    leave(el, done){
      const tl = this.$gsap.timeline({
        onComplete: function (){
          done()
        }
      })
      tl.to('#loader',{marginLeft: '0', duration: 0.7})
      // tl.to('#lottie-holder',{backgroundColor: 'rgba(0,0,0,0)', opacity: 0, zIndex: 1, duration: 1},0)
    },
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true
    },
  },
}
