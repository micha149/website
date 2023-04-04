import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from '@svgr/rollup';

export default defineConfig({
    plugins: [
        svgr({
            namedExport: 'Image',
            ref: true,
            replaceAttrValues: { '#000': 'currentColor' },
            svgProps: {
                fill: 'currentColor',
            },
        }),
        react()
    ],
})