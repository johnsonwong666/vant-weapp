const path = require('path');
const { wxTool } = require('./tasks/watchWxOutput');
// const { webhook } = require('./tasks/webhook');

function watch(hook) {
  
  // TODO example 自动构建
  // hook.afterRun.tap('build', wxTool.packNpm);
  // hook.watch.tap('packNpmWatch', wxTool.packNpmDebounce);
  hook.release.tap('release', ({ release, data }) => {
    // webhook(data);
    if (release) {
      wxTool.upload();
    }
  });
}

module.exports = (config) => ({
  basedir: __dirname,
  compiler: path.join(__dirname, 'build/compilers'),
  version: '0.1.0',
  entryPath: path.resolve(__dirname, 'packages'),
  output: {
    path: path.join(__dirname, 'dist')
  },
  tsconfig: './tsconfig.json',
  typesDir: '',
  hooks: [watch],
  mainPackage: ''
});
