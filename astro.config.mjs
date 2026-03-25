import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://invoicecompare.vercel.app',
  build: {
    format: 'directory',
  },
});
