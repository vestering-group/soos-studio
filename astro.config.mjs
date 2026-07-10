// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// De site draait nu op GitHub Pages (vestering-group.github.io/soos-studio).
// Zodra het domein soos.studio via DNS gekoppeld is:
//   1. site: 'https://soos.studio'
//   2. base: '/' (of deze regel weghalen)
//   3. public/CNAME toevoegen met inhoud "soos.studio"
export default defineConfig({
  site: 'https://vestering-group.github.io',
  base: '/soos-studio',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
