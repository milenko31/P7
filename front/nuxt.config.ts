import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  server: {
    port: 3001 // default: 3000
  },
  ssr: false,
  head: {
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
    css: [
        "@/assets/css/normalize.css",
        "@/assets/css/style.css",
         ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        transpile: [
            "@heroicons/vue"
        ],
    },
    buildModules: [
        "@pinia/nuxt"
    ],
});
