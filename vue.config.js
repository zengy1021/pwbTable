module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://apps.echatsoft.com:9443',
        ws: false, //是否代理websockets
        changeOrigin: false, // 设置同源  默认false，是否需要改变原始主机头为目标URL
        pathRewrite: {
          '^/api': '' //重写路径
        }
      }
    }
  }
};
