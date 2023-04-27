/* eslint-disable no-new */
const { logger } = require('@titian-design/cli');
const Compiler = require('./BasicCompiler');
// import { dev } from '@vant/cli/lib/commands/dev.js';
// const { dev } = require('@vant/cli/lib/commands/dev.js')
process.on('unhandledRejection', (error) => {
  logger.error('compiler', error);
});

function start() {
  let args = {
    basedir: '/Users/huangzongshen/Desktop/vant-weapp',
    compiler: '/Users/huangzongshen/Desktop/vant-weapp/build/compilers',
    version: '0.1.0',
    entryPath: '/Users/huangzongshen/Desktop/vant-weapp/packages',
    output: {
      path: '/Users/huangzongshen/Desktop/vant-weapp/example/dist'
    },
    tsconfig: '../../../tsconfig.json',
    typesDir: '',
    hooks: [ null ],
    mainPackage: '',
    args: [],
    configFile: '/Users/huangzongshen/Desktop/vant-weapp/titian.config.js',
    configFileDependencies: [
      '/Users/huangzongshen/Desktop/vant-weapp/tasks/watchWxOutput.js',
      '/Users/huangzongshen/Desktop/vant-weapp/titian.config.js'
    ],
    inlineConfig: { args: [] },
    root: '/Users/huangzongshen/Desktop/vant-weapp',
    mode: 'production',
    compilerPath: '/Users/huangzongshen/Desktop/vant-weapp/build/compilers/lib/index.js'
  }
  new Compiler(args);
}

async function build() {
  let args = {
    basedir: '/Users/huangzongshen/Desktop/vant-weapp',
    compiler: '/Users/huangzongshen/Desktop/vant-weapp/build/compilers',
    version: '0.1.0',
    entryPath: '/Users/huangzongshen/Desktop/vant-weapp/packages',
    output: {
      path: '/Users/huangzongshen/Desktop/vant-weapp/example/dist'
    },
    tsconfig: '../../../tsconfig.json',
    typesDir: '',
    hooks: [ null ],
    mainPackage: '',
    args: [],
    configFile: '/Users/huangzongshen/Desktop/vant-weapp/titian.config.js',
    configFileDependencies: [
      '/Users/huangzongshen/Desktop/vant-weapp/tasks/watchWxOutput.js',
      '/Users/huangzongshen/Desktop/vant-weapp/titian.config.js'
    ],
    inlineConfig: { args: [] },
    root: '/Users/huangzongshen/Desktop/vant-weapp',
    mode: 'production',
    compilerPath: '/Users/huangzongshen/Desktop/vant-weapp/build/compilers/lib/index.js'
  }
  // await dev()
  new Compiler(args);
}

build()

function release() {
  logger.error('compiler', 'release is not supported');
}

module.exports = {
  start,
  build,
  release,
  Compiler
};
