import {Zone} from 'zone.js';

declare var fetch, Zone;

export class API {

  getBooks() {
    return Zone.bindPromiseFn(fetch)('http://localhost:3000/books');
  }

  getHackerNews() {
    return Zone.bindPromiseFn(fetch)('http://localhost:3000/hackernews')
  }

}
