import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;

const banner =
  '/*!\n' +
  ` * el-generator-form.js v0.1.0\n` +
  ` * (c) 2019-${new Date().getFullYear()} GoodWin\n` +
  ' * Released under the MIT License.\n' +
  ' */';

const plugins = [
  babel({
    exclude: 'node_modules/**',
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            ie: 11,
            browsers: 'last 5 versions'
          },
          useBuiltIns: 'usage'
        }
      ],
      '@vue/babel-preset-jsx'
    ]
  }),
  commonjs(),
  vue({ css: false }),
  resolve({
    browser: true
  })
];

let config = {
  external: {
    lodash: './node_modules/lodash/index.js'
  },
  input: 'index.js',
  output: {
    file: 'dist/el-form-generator.js',
    format: 'umd',
    name:"el-form-generator",
    env: 'development',
    banner
  },
  plugins: plugins
};

if (production) {
  config.output.sourcemap = false;
}

export default config;
