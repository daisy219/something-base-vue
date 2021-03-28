
/** @type {import('webpack').Configuration} */
module.exports = {
  lintOnSave: false,

  configureWebpack: {
    devtool: 'source-map',
  },
  publicPath: './',
  devServer: {
    host: '0.0.0.0',
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌
    // 配置代理
    // proxy: {
    //   '/index.php': {
    //     target: 'https://prezhentui.71360.com/v2', // pre环境
    //     // target: 'https://tyunzhentui.71360.com/v2', // 生产环境
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/index.php': ''
    //     }
    //   }
    // }
  }
}

