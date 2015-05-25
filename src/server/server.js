import utils from './modules/scraper';
import hn from './modules/hacker-news';
var express = require('express');

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../webpack.config';

const app = express()
  .all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  })
  .get('/books', (req, res) => {
    utils.scrapeNYT('http://www.nytimes.com/best-sellers-books/').then((data) => {
      res.send(data);
    });
  })
  .get('/hackernews', (req, res) => {
    hn.getNews().then((news) => {
      res.send(news);
    });
  });

app.use("/",  express.static(__dirname + '/public'))
  .listen(3001)

new WebpackDevServer(webpack(config), {
  contentBase: config.output.contentBase,
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  watchDelay: 300,
  stats: { colors: true },
}).listen(3000, '0.0.0.0', (err, result) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:3000');
});
