import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'

export default defineConfig({
  site: 'https://ccboard.bruniaux.com',
  trailingSlash: 'always',

  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      serialize(item) {
        if (item.url === 'https://ccboard.bruniaux.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' }
        }
        if (item.url.includes('/docs/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' }
        }
        if (item.url.includes('/cheatsheet/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' }
        }
        return { ...item, priority: 0.6, changefreq: 'monthly' }
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
})
