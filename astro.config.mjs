// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const isProd = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.DEPLOY_TARGET === 'github';

export default defineConfig({
  integrations: [mdx()],
  site: isGithubPages
    ? 'https://jonper-dev.github.io'
    : 'https://jpervik.no',
  base: isGithubPages ? '/jons_utviklerside' : '/',
  server: {
    open: false
  }
});
