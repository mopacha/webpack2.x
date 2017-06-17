安装

安装 Node.js， Node.js 自带了软件包管理器 npm，Webpack 需要 Node.js v0.6 以上支持，建议使用最新版 Node.js。

用 npm 安装 Webpack：

$ npm install webpack -g
此时 Webpack 已经安装到了全局环境下，可以通过命令行 webpack -h 试试。

通常我们会将 Webpack 安装到项目的依赖中，这样就可以使用项目本地版本的 Webpack。

# 进入项目目录
# 确定已经有 package.json，没有就通过 npm init 创建
# 安装 webpack 依赖
$ npm install webpack --save-dev
# 查看 webpack 版本信息
$ npm info webpack

# 安装指定版本的 webpack
$ npm install webpack@1.12.x --save-dev

#单独安装Webpack 开发工具：
$ npm install webpack-dev-server --save-dev