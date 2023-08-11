import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import webmanifest from 'astro-webmanifest';

export default defineConfig({
    integrations: [
        tailwind(),
        webmanifest({
            name: 'Michael van Engelshoven',
            short_name: 'micha149',
            background_color: '#0F172A',
            theme_color: '#0F172A',
            display: 'standalone',
            icon: 'src/images/icon.svg',
        })
    ]
});
