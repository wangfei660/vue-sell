const webpack = require('webpack')
const path = require('path')
const appData = require('./data')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径
  baseUrl: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 用于嵌套生成的静态资产（js，css，img，fonts）的目录。
  // assetsDir: '',
  // 以多页模式构建应用程序。
  pages: undefined,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的Vue核心的构建。
  runtimeCompiler: false,
  // 默认情况下babel-loader忽略其中的所有文件node_modules。
  transpileDependencies: [],
  // 生产环境sourceMap
  productionSourceMap: false,
  // webpack配置
  configureWebpack: () => {},
  chainWebpack: config => {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])
  },
  // css相关配置
  css: {
    modules: false,
    extract: true,
    sourceMap: false,
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 打开浏览器
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {
      app.get('/api/seller', (req, res) => {
        res.json({
          status: 1,
          data: seller
        })
      })
      app.get('/api/goods', (req, res) => {
        res.json({
          status: 1,
          data: goods
        })
      })
      app.get('/api/ratings', (req, res) => {
        res.json({
          status: 1,
          data: ratings
        })
      })
    }
  },
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}