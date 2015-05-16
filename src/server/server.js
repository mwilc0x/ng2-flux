import utils from './modules/scraper';
var express = require('express');

const app = express()
  .all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  })
  .get('/books', (req, res) => {
    utils.scrapeNYT('http://www.nytimes.com/best-sellers-books/').then((data) => {
      res.send(data);
    });
  });

app.use(express.static('.'))
  .listen(3001)
