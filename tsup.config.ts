import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: ['src/*.ts'],
        format: ['esm'],
        outDir: 'dist',
        clean: true,
        minify: true,
        treeshake: true,
        dts: true,
        target: 'es2020',
    },
]);