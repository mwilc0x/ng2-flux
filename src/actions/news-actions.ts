import * as Dispatcher from '../utils/dispatcher';
import {API} from '../utils/api';

interface INewsActions {
  getHackerNews(): void;
}

export class Actions implements INewsActions {

  _api: API;

  constructor() {
    this._api = new API();
  }

  getHackerNews() {

    this._api.getHackerNews()
      .then(r => r.json())
      .then((r) => {

        Dispatcher.dispatch({
          type: 'FETCHED_HACKER_NEWS',
          data: r
        });

      });

  }

}
