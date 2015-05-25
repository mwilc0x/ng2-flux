/// <reference path="../../typings/tsd.d.ts" />

import * as EventEmitter2 from 'eventemitter2';
import * as Dispatcher from '../utils/dispatcher';
import {List, Record, Map} from "immutable";

interface NewsItem {
  title: string;
  url: string;
}

interface News extends Map<string, any> {
  items: List<NewsItem>
}

class HackerNewsStore extends EventEmitter2 {

  private _CHANGE_EVENT: string;
  private _master: News;
  private _news: News;

  constructor() {
    super();
    this._CHANGE_EVENT = 'change';
    Dispatcher.register(this._dispatchToken.bind(this));
  }

  addChangeListener(callback) {
    this.on(this._CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this._CHANGE_EVENT, callback);
  }

  getNews() {
    return this._news.toJS().items;
  }

  private _emitChange() {
    this.emit(this._CHANGE_EVENT);
  }

  private _setMaster(data) {
    this._master = <News>Map({ items: data });
  }

  private _addNews(data) {
    this._news = <News>Map({ items: data });
  }

  private _setNews(data) {
    this._news = <News>Map({ items: data });
  }

  private _dispatchToken(action: any) {

    switch(action.type) {

      case 'FETCHED_HACKER_NEWS':
        this._setMaster(action.data);
        this._addNews(action.data);
        this._emitChange();
        break;

      default:
        // do nothing
    }
  }

}

let ns = new HackerNewsStore();
export = ns;
