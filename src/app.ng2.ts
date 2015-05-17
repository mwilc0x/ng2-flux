/// <reference path="../typings/tsd.d.ts" />

import {bootstrap, Component, View, For} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {BookList} from './components/book-list/book-list';
import {Actions} from './actions/book-actions';
import  * as BookStore from './stores/book-store';

@Component({
	selector:'app',
	injectables: [Actions]
})
@View({
	template: `
	  <div>
	    <h1>{{name}} App</h1>
		<book-list [lists]="lists"></book-list>
	  </div>
	`,
	directives: [BookList]
})
class App {

	name: string;
	lists: any;
	_actions: any;
	_bookStore: any;

	constructor(actions: Actions) {

		this.lists = []
		this.name = 'NY Times Best Seller List ';

		actions.getBooks();

		this._bookStore = BookStore;

		this._bookStore.addChangeListener(this.update.bind(this))

	}

	update() {
		this.lists = this._bookStore.getBooks();
	}

}

bootstrap(App);
