declare var fetch, Zone;

export class API {

  getBooks() {
    return fetch('http://localhost:3000/books');
  }

  getHackerNews() {
    return fetch('http://localhost:3000/hackernews')
  }

}
