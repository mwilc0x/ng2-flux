var webpack = require('webpack');

module.exports = {

  entry: {
    angular2: [
      'reflect-metadata',
      './src/common/BrowserDomAdapter',
      'angular2/angular2'
    ],
    app: [
      'webpack/hot/dev-server',
      './src/bootstrap'
    ]
  },

  output: {
    path: '/',
    filename: '[name].js',
    contentBase: 'public/',
    publicPath: '/public/'
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
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: 'raw' },
      { test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/, loader: 'file?name=assets/[hash].[ext]' },
      { test: /\.html$/, loader: 'raw' },
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
