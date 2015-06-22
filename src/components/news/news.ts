/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgIf, NgFor} from 'angular2/angular2';
import {Actions} from '../../actions/news-actions';
import * as NewsStore from '../../stores/news-store';
import {Loader} from '../loader/loader';

@Component({
    selector: 'news',
    properties: [
      'news'
    ],
    appInjector: [Actions]
})
@View({
    directives: [NgIf, NgFor, Loader],
    template: `
      <div *ng-if="!news">
        <loader></loader>
      </div>
      <div *ng-for="#item of news, #i = index">
          <h3>{{i}}. <a class="hacker-links" href={{item.url}}>{{item.title}}</a></h3>
      </div>
    `
})
export class News {

  _newsStore: any;
  news: any;

  constructor(private actions: Actions) {

    this._newsStore = NewsStore;

    this._newsStore.addChangeListener(this.update.bind(this))

    actions.getHackerNews();

  }

  update(news) {
    this.news = this._newsStore.getNews();
  }

}
