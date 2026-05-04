import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: ['src/index.ts'],
        format: ['esm'],
        outDir: 'dist',
        clean: true,
        minify: true,
        treeshake: true,
        target: 'es2020',
        bundle: true,
        dts: false,
    },
]);