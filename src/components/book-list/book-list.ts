/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';
import {Book} from '../book/book';

@Component({
    selector: 'book-list',
    properties: {
      lists: 'lists'
    }
})
@View({
    directives: [NgFor, Book],
    template: `
        <div *ng-for="#list of lists">
            <h2>{{list.title}}</h2>
            <div *ng-for="#book of list.books">
                <book [book]="book"></book>
            </div>
        </div>
    `
})
export class BookList { }
