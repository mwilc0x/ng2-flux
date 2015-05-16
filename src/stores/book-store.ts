/// <reference path="../../typings/tsd.d.ts" />

import * as EventEmitter2 from 'eventemitter2';
import * as Dispatcher from '../utils/dispatcher';
// import {List, Record, Map} from "immutable";
//
// interface Date extends Map<string, any> {
//   curr: string
//   prev: string;
//   next: string;
// }
//
// interface Book extends Map<string, any> {
//   id: number;
//   index: string;
//   summary: string;
// }
//
// interface BookList {
//   books:List<Book>;
//   date:Date;
//   title:string;
// }

class BookStore extends EventEmitter2 {

  private _CHANGE_EVENT: string;
  private _bookList: any;
  private _date: any;

  constructor() {
    super();
    this._CHANGE_EVENT = 'change';
    this._bookList = {};
    Dispatcher.register(this._dispatchToken.bind(this));
  }

  addChangeListener(callback) {
    this.on(this._CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this._CHANGE_EVENT, callback);
  }

  getBooks() {
    return this._bookList;
  }

  private _emitChange() {
    this.emit(this._CHANGE_EVENT);
  }

  private _setDate(date) {
    this._date = date;
  }

  private _addBooks(data) {
    this._bookList = data;
  }

  private _dispatchToken(action: any) {

    switch(action.type) {

      case 'FETCHED_BOOKS':
        this._addBooks(action.data);
        this._emitChange();
        break;

      default:
        // do nothing
    }
  }

}

let bs = new BookStore();
export = bs;
