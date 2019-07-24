module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.MOCK !== "none" ? 'http://localhost:8080' : 'http://193.112.151.166:8080',
        bypass: function(req, res) {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          } else if (process.env.MOCK !== "none") {
            const name = req.path
              .split('/api/')[1]
              .split('/')
              .join('_');
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
