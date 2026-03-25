import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://invoicecompare.vercel.app',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
