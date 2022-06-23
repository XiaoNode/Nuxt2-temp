import env from "./env";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt2-temp",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  server: {
    port: 7000,
  },

  env: {
    NODE_ENV: env[process.env.NODE_ENV].NODE_ENV,
    // 统一登录 process.env.authURL
    LOGIN_URL: env[process.env.NODE_ENV].LOGIN_URL,
    // 请求服务器地址
    SERVER_URL: env[process.env.NODE_ENV].SERVER_URL,
    // 前端系统的端口
    SYSTEM_PORT: env[process.env.NODE_ENV].SYSTEM_PORT,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css", "normalize.css/normalize.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/axios",
    { src: "@/plugins/loading", ssr: false },
    { src: "@/plugins/vuex-persister.js", ssr: false },
    // { src: '@/plugins/resolveapps', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              greeting: 'Hello world!'
            },
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    analyze: true,
  },

  loading: {
    color: "DodgerBlue",
    height: "2px",
    continuous: true,
    duration: 3000,
  },
};
