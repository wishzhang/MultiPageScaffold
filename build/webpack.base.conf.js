'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob=require('glob')

//相对项目根目录的文件夹路径，返回绝对路径
//如resolve('test')，本地测试返回结果 E:\WebstormProjects\MultiPageScaffold\test
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getEntries(globPath){
  const entries=glob.sync(globPath).reduce((result,entry)=>{
    const moduleName=path.basename(path.dirname(entry))
    result[moduleName]=entry
    return result
  },{})
  return entries
}

const entries=getEntries('./src/pages/**/main.js')

const entriesHTML = getEntries('./src/pages/**/*.html')   // 获取多页面所有入口文件

console.log('webpack打包:入口对象')
console.dir(entries)
console.log('webpack打包：HtmlWebpackPlugin的模板文件集合')
console.dir(entriesHTML)


let webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: entries,
  output: {
    path: config.build.assetsRoot,  //输出目录，dev模式下将文件生成在内存中
    filename:'pages/[name]/[name].js'
    //filename: utils.assetsPath('js/[name].[chunkhash].js')
    //chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],//自动解析确定的扩展
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

/**
 * 页面打包
 * @entries 打包文件
 * @config 参数配置
 * @module 使用的主体
 */
function pack (entries, module) {
  for (const path in entries) {
    const conf = {
      filename: `pages/${path}/index.html`,
      template: resolve(entries[path]),   // 模板路径
      inject: true,
      chunks: ['manifest', 'vendor', path]    // !注意：必须先引入公共依赖,否则打包报错，webpackJsonp is not defined
    }
/*    if(!module.plugins){
      module.plugins=[]
    }*/
    module.plugins.push(new HtmlWebpackPlugin(conf))
  }
}

pack(entriesHTML, webpackConfig)

module.exports=webpackConfig
