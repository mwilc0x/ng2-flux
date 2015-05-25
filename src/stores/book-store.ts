/// <reference path="../../typings/tsd.d.ts" />

import * as EventEmitter2 from 'eventemitter2';
import * as Dispatcher from '../utils/dispatcher';
import {List, Record, Map} from "immutable";

interface Date extends Map<string, any> {
  curr: string
  prev: string;
  next: string;
}

interface Book extends Map<string, any> {
  id: number;
  index: string;
  summary: string;
}

interface BookList {
  books:List<Book>;
  date:Date;
  title:string;
}

interface Library extends Map<string, any> {
  bookList: List<BookList>
}

class BookStore extends EventEmitter2 {

  private _CHANGE_EVENT: string;
  private _master: Library;
  private _bookList: Library;
  private _date: any;

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

  getBooks() {
    return this._bookList.toJS().bookList;
  }

  private _emitChange() {
    this.emit(this._CHANGE_EVENT);
  }

  private _setDate(date) {
    this._date = date;
  }

  private _setMaster(data) {
    this._master = <Library>Map({ bookList: data });
  }

  private _addBooks(data) {
    this._bookList = <Library>Map({ bookList: data });
  }

  private _setBooks(data) {
    this._bookList = <Library>Map({ bookList: data });
  }

  private _filterBooks(query) {

    var filtered_lists = this._master.toJS().bookList.map((list) => {
      return {
        title: list.title,
        date: list.date,
        books: list.books.filter((book) => {
          return book.summary.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
      };
    });

    this._setBooks(filtered_lists);
    this._emitChange();
  }

  private _dispatchToken(action: any) {

    switch(action.type) {

      case 'FETCHED_BOOKS':
        this._setMaster(action.data);
        this._addBooks(action.data);
        this._emitChange();
        break;

      case 'USER_SEARCHED':
        this._filterBooks(action.data);
        break;

      default:
        // do nothing
    }
  }

}

let bs = new BookStore();
export = bs;
