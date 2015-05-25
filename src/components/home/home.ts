/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {BookList} from '../book-list/book-list';
import {Actions} from '../../actions/book-actions';
import * as BookStore from '../../stores/book-store';

@Component({
  selector: 'home',
  appInjector: [Actions]
})
@View({
  directives: [BookList],
  template:`
    <book-list [lists]="lists"></book-list>
  `
})
export class Home {

	lists: any;
	_actions: any;
	_bookStore: any;

	constructor(actions: Actions) {

		this.lists = [];

		actions.getBooks();

		this._bookStore = BookStore;

		this._bookStore.addChangeListener(this.update.bind(this));

	}

	update() {
		this.lists = this._bookStore.getBooks();
	}

}
