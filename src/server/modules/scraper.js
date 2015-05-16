import request from 'request';
import cheerio from 'cheerio';
import { Promise } from 'es6-promise';

class Utils {

  scrapeNYT(url) {
    const self = this;

    return new Promise((resolve, reject) => {
      request(url, (error, response, html) => {
        if (!error) {
          const $ = cheerio.load(html),
          date = {
            prev: new Date($('#bestsellersPreviousList a span').text()).toDateString(),
            curr: new Date($('.element1 p').text()).toDateString(),
            next: new Date($('#bestsellersNextList a span').text()).toDateString()
          },
          lists = [],
          promises = [];

          $('div.bColumn div.columnGroup.first div.story').each(function (i, story) {
            if ($(this).find('h3 a').attr('href')) {
              promises.push(self.scrapeSubPage($(this).find('h3').text(), $(this).find('h3 a').attr('href'), date));
            }
          });

          Promise.all(promises).then((data) => {
            resolve(data);
          });
        }
      });
    });
  }

  scrapeSubPage(title, url, date) {
    const data = [];

    return new Promise((resolve, reject) => {
      request(url, (error, response, html) => {
        if (!error) {
          const $ = cheerio.load(html);

          $('table.bestSellersList tbody tr.bookDetails').each(function () {
            data.push({
              id: Math.floor(100000 + Math.random() * 900000),
              index: $(this).find('td.index').text(),
              summary: $(this).find('td.summary').text().trim()
            });
          });

          resolve({ date: date, title: title, books: data });
        }
      });
    });
  }
}

let u = new Utils();
export default u;
