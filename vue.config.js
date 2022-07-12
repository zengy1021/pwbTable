module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://0.0.0.0:9980',
        target: 'https://apps.echatsoft.com:9443',
        ws: false, //是否代理websockets
        changeOrigin: false, // 设置同源  默认false，是否需要改变原始主机头为目标URL
        pathRewrite: {
          '^/api': '/api/' //重写路径
        }
      },
      '/eApi': {
        target: 'https://apps.echatsoft.com:9443',
        ws: false, //是否代理websockets
        changeOrigin: false, // 设置同源  默认false，是否需要改变原始主机头为目标URL
        pathRewrite: {
          '^/eApi': '/extension/' //重写路径
        }
      }
      // '/proxy/api': {
      //   target: 'http://127.0.0.1:9980',
      //   // target: 'https://apps.echatsoft.com:9443',
      //   ws: false, //是否代理websockets
      //   changeOrigin: false, // 设置同源  默认false，是否需要改变原始主机头为目标URL
      //   pathRewrite: {
      //     '^/proxy/api': '' //重写路径
      //   }
      // }
    }
  }
};
