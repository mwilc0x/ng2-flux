/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, For} from 'angular2/angular2';
import {Book} from '../book/book';

@Component({
    selector: 'book-list',
    properties: {
      lists: 'lists'
    }
})
@View({
    directives: [For, Book],
    template: `
        <div *for="#list of lists">
            <h2>{{list.title}}</h2>
            <div *for="#book of list.books">
                <book [book]="book"></book>
            </div>
        </div>
    `
})
export class BookList { }
