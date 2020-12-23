export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Knight Digital Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Websites and applications for businesses.  Stop paying more than you should for your website. Get enterprise features without getting overcharged.' },
      {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Knight Digital Development',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Websites and applications for businesses.  Stop paying more than you should for your website. Get enterprise features without getting overcharged.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://derekknight.tech/logo.png',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Knight Digital Development',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Knight Digital Development',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Websites and applications for businesses.  Stop paying more than you should for your website. Get enterprise features without getting overcharged.',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://derekknight.tech/logo.png',
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: 'Knight Digital Development',
        },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content: 'https://derekknight.tech/logo.png',
        },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/32.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/main.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  pwa: {
    meta: {
      theme_color: '#fed047',
    },
    manifest: {
      background_color: '#35495e',
      name: 'Knight Digital Development',
      short_name: 'Knight Dev',
    }
  }
}
