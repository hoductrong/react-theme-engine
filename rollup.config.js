import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import terser from '@rollup/plugin-terser';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  //entry point
  input: 'src/index.ts',

  //output directory
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],

  //plugins
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.json',
    }),
    nodePolyfills(/* options */),
    terser({
      format: {
        comments: false,
      },
      compress: false,
    }),
  ],
};
