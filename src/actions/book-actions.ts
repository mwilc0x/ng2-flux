import * as Dispatcher from '../utils/dispatcher';
import {API} from '../utils/api';

interface IBookActions {
  getBooks(): void;
  search(query: string): void;
}

export class Actions implements IBookActions {

  _api: API;

  constructor() {
    this._api = new API();
  }

  getBooks() {

    this._api.getBooks()
      .then(r => r.json())
      .then((r) => {

        Dispatcher.dispatch({
          type: 'FETCHED_BOOKS',
          data: r
        });

      });
  }

  search(query) {

    Dispatcher.dispatch({
      type: 'USER_SEARCHED',
      data: query
    });

  }

}
