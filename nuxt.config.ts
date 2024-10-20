// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr:false,
  compatibilityDate: '2024-04-03',
  // pages:false,
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    "~/assets/css/toastr.css"
  ],
  app: {
    head: {
      script: [
        { src:"toastr.js"}
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

    // CLOUDINARY*****
    cloudinaryCloudName:process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey:process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret:process.env.CLOUDINARY_API_SECRET
}
})
