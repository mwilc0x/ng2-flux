import * as Dispatcher from '../utils/dispatcher';
import {API} from '../utils/api';

interface IBookActions {
  getBooks(): void;
}

export class Actions implements IBookActions {

  getBooks() {

    let api = new API();

    api.getBooks()
      .then(r => r.json())
      .then((r) => {

        Dispatcher.dispatch({
          type: 'FETCHED_BOOKS',
          data: r
        });

      })
  }

}
