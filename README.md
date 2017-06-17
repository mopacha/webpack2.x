## 一、前言

青青子衿，悠悠我心，但为君故，沉吟至今，webpack2.x夜未眠。

网上找了好多关于webpack的文章，但大多数都是停留在webpack1.x版本，虽然差别不大，但作为一个前端开发者，时刻走在技术的最前沿还是非常的必要。

本文从实践出发，介绍了webpack 的一些常见的功能，如有不足，请多多指教；

## 二、介绍

Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。

webpack发展相当不错，已经有2.2版本，最大的更新应该是支持ES6 Modules，根据ES6的特性来做一些Code Splitting等。

定义：官网对webpack的定义是模块打包器(module bundler)，它能够把有依赖关系的各种文件打包成一系列的静态资源。如下图所示。


## 三、安装

安装 Node.js， Node.js 自带了软件包管理器 npm，Webpack 需要 Node.js v0.6 以上支持，建议使用最新版 Node.js。
用 npm 安装 Webpack：

```
$ npm install webpack -g
```

此时 Webpack 已经安装到了全局环境下，可以通过命令行 
```webpack -h ```
试试。

## 四、构建项目

### 安装依赖

通常我们会将 Webpack 安装到项目的依赖中，这样就可以使用项目本地版本的 Webpack。

### 创建文件夹，进入项目目录
```
$ mkdir webpack
$ cd webpack
```

### 创建 package.json文件

```
$ npm init 
```

### 安装 webpack 依赖
```
$ npm install webpack --save-dev
```

### 安装指定版本的 webpack

```
$ npm install webpack@1.12.x --save-dev
```

### 查看 webpack 版本信息

```
$ npm info webpack
```

### 单独安装Webpack 开发工具：

```
$ npm install webpack-dev-server --save-dev
```