import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vorms',
  description: 'Vue form validate with Composition API',

  // TODO: Add `og:image` and `twitter:image`
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Alex Liu' }],
    ['meta', { property: 'og:title', content: 'Vorms' }],
    ['meta', { property: 'og:description', content: 'Vue Form Validate with Composition API' }],
    ['meta', { property: 'og:image', content: 'https://vorms.mini-ghost.dev/og.png' }],
    ['meta', { property: 'og:image:alt', content: 'Vorms' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@Minighost_Alex' }],
    ['meta', { name: 'twitter:image', content: 'https://vorms.mini-ghost.dev/og.png' }],
  ],

  markdown: {
    theme: {
      dark: 'github-dark-dimmed',
      light: 'vitesse-light'
    },
    config(md) {
      // https://github.com/markdown-it/markdown-it/issues/878
      md.linkify.set({
        fuzzyLink: false
      })
    }
  },

  themeConfig: {
    logo: '/favicon.svg',

    editLink: {
      pattern: 'https://github.com/Mini-ghost/vorms/tree/docs/docs/:path'
    },

    nav: [
      { text: 'Get Started', link: '/guide/', activeMatch: '/guide/' },
      { text: 'API', link: '/api/', activeMatch: '/api/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Mini-ghost/vorms' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          {
            text: 'Get Started',
            link: '/guide/'
          },
          {
            text: 'Examples',
            link: '/guide/examples'
          }
        ]
      },
      {
        text: 'API Reference',
        items: [
          {
            text: 'useForm',
            link: '/api/use-form',
          },
          {
            text: 'useField',
            link: '/api/use-field',
          },
          {
            text: 'useFieldArray',
            link: '/api/use-field-array',
          },
          {
            text: 'useFormContext',
            link: '/api/use-form-context',
          },
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Alex Liu'
    },
  }
})
