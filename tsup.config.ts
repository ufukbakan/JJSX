import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: ['src/*.ts'],
        format: ['esm'],
        outDir: 'dist',
        clean: true,
        minify: true,
        treeshake: true,
        dts: false,
        outExtension() {
            return { js: '.js' };
        },
    },
    // TODO: Will be enabled if any CJS support required
    // {
    //     entry: ['src/*.ts'],
    //     format: ['cjs'],
    //     outDir: 'dist/cjs',
    //     clean: true,
    //     minify: true,
    //     treeshake: true,
    //     dts: false,
    //     outExtension() {
    //         return { js: '.js' };
    //     },
    // },
]);