// .vuepress/client.ts
const defineUserConfig = require('@vuepress/cli');
const defaultTheme = require('../../node_modules/@vuepress/theme-default');
const photoswipe = require('../../node_modules/vuepress-plugin-photo-swipe');


export default defineUserConfig({
    base,

    title: "PhotoSwipe",
    description: "Image preview plugin for VuePress2",

    theme: defaultTheme({
      logo: "https://theme-hope-assets.vuejs.press/logo.svg",

      repo: "vuepress-theme-hope/vuepress-theme-hope/tree/main/demo/photo-swipe/",

      navbar: [
        { text: "Home", link: "/" },
        { text: "Test", link: "/test" },
      ],

      themePlugins: {
        mediumZoom: false,
      },
    }),

    plugins: [photoSwipePlugin()],
  });
