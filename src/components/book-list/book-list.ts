/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, onInit, onChange, onDestroy, NgFor, NgIf} from 'angular2/angular2';
import {Book} from '../book/book';
import {Loader} from '../loader/loader'

@Component({
    selector: 'book-list',
    properties: ['lists'],
    lifecycle: [onInit, onChange, onDestroy]
})
@View({
    directives: [NgIf, NgFor, Book, Loader],
    template: `
        <div *ng-if="!lists.length">
          <loader></loader>
        </div>
        <div *ng-for="#list of lists">
            <h2>{{list.title}}</h2>
            <div *ng-for="#book of list.books">
                <book [book]="book"></book>
            </div>
        </div>
    `
})
export class BookList {

  onInit() {
    console.log('BookList Initialized');
  }

  onChange(changes) {
    console.log('BookList Properties Changed', changes)
  }

  onDestroy() {
    console.log('BookList Destroyed')
  }

}
