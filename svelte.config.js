import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

// Build frame for the kb export: .svx pages through mdsvex, the shared runbook layout, #lib → src/lib.
export default {
  extensions: ['.svelte', '.svx'],
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx'], layout: { runbook: 'src/lib/layouts/runbook.svelte' } })],
  kit: {
    adapter: adapter(),
    alias: { '#lib': 'src/lib', '#lib/*': 'src/lib/*' },
    prerender: { entries: ['*'], handleHttpError: 'warn' },
  },
};
