import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scrapeman.io',
  integrations: [tailwind(), react(), sitemap()],
  output: 'static',
  trailingSlash: 'never',
});
