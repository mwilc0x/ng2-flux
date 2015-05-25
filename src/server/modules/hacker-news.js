import { Promise } from 'es6-promise';
var Firebase = require('firebase');

class HackerNews {

  getNews(url) {
    const self = this;

    return new Promise((resolve, reject) => {
      let ref = new Firebase("https://hacker-news.firebaseio.com/v0/"),
          promises = [];

      ref.child('topstories').once('value', (snapshot) => {
        let ids = snapshot.val();

        for(let i = 0; i < 25;  i++) {
          promises.push(this._getItemDetails(i, ids[i]))
        }

        Promise.all(promises).then((data) => {
          resolve(data);
        });

      });
    });
  }

  _getItemDetails(index, id) {

    return new Promise((resolve, reject) => {
      let ref = new Firebase("https://hacker-news.firebaseio.com/v0/item/" + id);

      ref.once('value', (snapshot) => {
          resolve({
            title: snapshot.val().title,
            url: snapshot.val().url
          })
      });
    });
  }
}

let hn = new HackerNews();
export default hn;
