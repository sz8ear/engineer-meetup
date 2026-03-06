import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://meetup2026.8ear.org',
  integrations: [sitemap()],
});
