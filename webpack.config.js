var webpack = require('webpack');
var path = require('path');
var appPath = path.resolve(__dirname, 'src');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

var config = {
  context: __dirname,
  devtool: 'eval-source-map',

  entry: {
    angular2: [
      'reflect-metadata',
      './src/common/BrowserDomAdapter',
      'angular2/angular2'
    ],
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './src/bootstrap'
    ]
  },

  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath: '/build/'
  },

  resolve: {
    root: __dirname,
    extensions: [
      '',
      '.js',
      '.ts',
      '.json',
      '.webpack.js',
      '.web.js'
    ],
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'src'
    ]
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.ts$/, loader: 'typescript-simple' }
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
