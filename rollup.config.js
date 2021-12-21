import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import { DEFAULT_EXTENSIONS as DEFAULT_BABEL_EXTENSIONS } from '@babel/core'
import typescript from '@rollup/plugin-typescript'

const { peerDependencies } = pkg
const external = Object.keys(peerDependencies)

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-is': 'ReactIs',
}

export default [
  {
    input: 'src/index.ts',
    external,
    output: {
      sourcemap: true,
      file: 'build/umd/yds-react.js',
      format: 'umd',
      name: 'YDS-React',
      indent: false,
      globals,
    },
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('development'),
        },
      }),
      typescript({
        exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.ts', '**/*.stories.tsx'],
      }),
      nodeResolve(),
      commonjs({
        include: 'node_modules/**',
      }),
      babel({
        extensions: [...DEFAULT_BABEL_EXTENSIONS, '.ts', '.tsx'],
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
      }),
    ],
  },
  {
    input: 'src/index.ts',
    external,
    output: {
      sourcemap: false,
      file: 'build/umd/yds-react.min.js',
      format: 'umd',
      name: 'YDS-React',
      indent: false,
      globals,
    },
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      }),
      typescript({
        exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.ts', '**/*.stories.tsx'],
      }),
      nodeResolve(),
      commonjs({
        include: '/node_modules/',
      }),
      babel({
        extensions: [...DEFAULT_BABEL_EXTENSIONS, '.ts', '.tsx'],
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
      }),
      terser(),
    ],
  },
]
