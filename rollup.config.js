import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');

export default [{
  input: [
    './src/index.ts'
  ],

  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    },
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
  ],

  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    })
  ],

  external: ['react', 'react-dom'],
}, {
  input: './src/global.scss',
  output: {
    file: 'lib/global.css',
    format: 'es'
  },
  plugins: [
    postcss({
      modules: true,
      extract: true
    }),
    copy({
      targets: [
        { src: 'src/vars.scss', dest: 'lib' }
      ]
    })
  ]
}];
