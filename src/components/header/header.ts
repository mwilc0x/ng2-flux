/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Actions} from '../../actions/book-actions';
import * as BookStore from '../../stores/book-store';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {RouterOutlet, RouterLink} from 'angular2/router';

@Component({
  selector: 'header',
  appInjector: [Actions]
})
@View({
  directives: [formDirectives, RouterOutlet, RouterLink],
  template:`
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"></button>
          <a class="navbar-brand" router-link="home">NY Times Best Sellers</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
              <li class="active"><a router-link="home">Home</a></li>
              <li><a router-link="news">Hacker News</a></li>
            </ul>

          <form class="navbar-form navbar-right" [control-group]="search">
            <div class="form-group">
              <input type="text" (keyup)="submit($event)" control="query" placeholder="Book name ..." class="form-control">
            </div>
          </form>
        </div>
      </div>
    </nav>
  `
})
export class Header {

  myForm: ControlGroup;
  builder: FormBuilder;
  search: ControlGroup;

  constructor(private actions: Actions) {

    this.builder = new FormBuilder()

    this.search = this.builder.group({
      query: ["", Validators.required], // required
    });
    
  }

  submit(event) {
    event.preventDefault();

    this.actions.search(this.search.value.query);
  }

}
