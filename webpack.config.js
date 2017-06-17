const HtmlwebpackPlugin = require('html-webpack-plugin');//通过 npm 安装
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack'); //访问内置的插件
const path = require('path');
//定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src/js');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
//Template的文件夹路径
const TEM_PATH = path.resolve(ROOT_PATH, 'templates');


const config = {
  entry: {
    //三个入口文件，pageA, pageB和 vendors
    pageA: path.resolve(APP_PATH, 'pageA.js'),
    pageB: path.resolve(APP_PATH, 'pageB.js'),
    vendors: ['jquery', 'moment']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'    //会根据entry的入口文件名称生成多个js文件，这里是( pageA.js,pageB.js和vendors.js)
  },
  devServer: {
    contentBase: BUILD_PATH,
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8888
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        include: [
           path.resolve(ROOT_PATH, "src/css/pageA"),
           path.resolve(ROOT_PATH, "src/css/pageB")
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use:[
          'url-loader?limit=40000'
        ]
      },
      {
        test: /\.jsx?$/,
        use:[
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ],
        include: [
           path.resolve(ROOT_PATH, "src/js")
        ]
      },
      {
        test: /\.(jsx|js)/,
        use:
          {
            loader: 'jshint-loader',
            options: {
              esversion: 6  //配置jshint的选项，支持es6的校验
            }
          },
        enforce: "pre",
        include: path.resolve(ROOT_PATH, "src/js"),
        exclude: /node_modules/
      }
    ],
  },
  
  //添加插件 会自动生成一个html文件
  plugins: [

    //创建了两个HtmlWebpackPlugin的实例，生成两个页面
    new HtmlwebpackPlugin({
      title: 'pageA',
      template: path.resolve(TEM_PATH, 'pageA.html'),
      filename: 'pageA.html',
      //chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: ['pageA', 'vendors'],
      //要把script插入到标签里
      inject: 'body'
    }),
    new HtmlwebpackPlugin({
      title: 'pageB',
      template: path.resolve(TEM_PATH, 'pageB.html'),
      filename: 'pageB.html',
      chunks: ['pageB', 'vendors'],
      inject: 'body'
    }),
    new UglifyJSPlugin({
    // 最紧凑的输出
    beautify: false,
    // 删除所有的注释
    comments: false,
    compress: {
      // 在UglifyJs删除没有用到的代码时不输出警告  
      warnings: false,
      // 删除所有的 `console` 语句
      // 还可以兼容ie浏览器
      drop_console: true,
      // 内嵌定义了但是只用到一次的变量
      collapse_vars: true,
      // 提取出出现多次但是没有定义成变量去引用的静态值
      reduce_vars: true,
    }
})
    /*new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })*/
  ]
};
module.exports = config;
  
