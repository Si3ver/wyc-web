const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
        'styles': path.resolve('src/assets/styles'),
        'common': path.resolve('src/common'),
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        // target: process.env.MOCK !== "none" ? 'http://localhost:8080' : 'http://193.112.151.166:8080',
        target: 'http://193.112.151.166:8080',
        bypass: function(req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          } else if (process.env.MOCK !== "none" && req.path.indexOf('api') && req.path.split) {
            // console.log(req.path)
            const name = req.path.split('/api/')[1].split('/').join('_')
            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            // delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          }
        }
      }
    }
  }
}
