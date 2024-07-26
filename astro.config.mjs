import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import playformCompress from '@playform/compress'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://newgent.digital',
	prefetch: true,
	integrations: [tailwind(), playformCompress(), sitemap()]
})
