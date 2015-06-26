/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'book',
    properties: ['book']
})
@View({
    template: `<p>{{book.index}}: {{book.summary}}</p>`
})
export class Book { }
