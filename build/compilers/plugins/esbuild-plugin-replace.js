const fs = require('fs');


const replacePlugin = () => ({
  name: 'replace-path',
      setup(build) {
        build.onLoad({ filter: /\.ts$/ }, async (args) => {
          console.log('args', args)
          const contents = await fs.promises.readFile(args.path, 'utf8');
          const replaced = contents.replace('@vant/icons/src/config', '../../@vant/icons/src/config');
          return { contents: replaced };
        });
      }
});

module.exports = replacePlugin
