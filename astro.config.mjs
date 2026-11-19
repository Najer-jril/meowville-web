import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://meowville.najer.dev',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'never',
  },
  devToolbar: {
    enabled: false,
  },
});
