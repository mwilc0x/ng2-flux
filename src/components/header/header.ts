/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Actions} from '../../actions/book-actions';
import {Validators, ControlGroup, FormBuilder, NgModel, NgFormModel} from 'angular2/forms';
import {RouterOutlet, RouterLink} from 'angular2/router';
import {Inject} from 'angular2/di';

@Component({
  selector: 'header',
  appInjector: [FormBuilder, Actions]
})
@View({
  directives: [NgModel, NgFormModel, RouterOutlet, RouterLink],
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

          <form class="navbar-form navbar-right" onsubmit="return false;" [ng-form-model]="searchForm">
            <div class="form-group">
              <input type="text" #tquery (keyup)="submit(tquery)" ng-control="query" placeholder="Book name ..." class="form-control">
            </div>
          </form>
        </div>
      </div>
    </nav>
  `
})
export class Header {

  searchForm: ControlGroup;
  query: string;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private actions: Actions) {

    this.query= '';

    this.searchForm = fb.group({
      query: ["Hello", Validators.required], // required
    });

  }

  submit(query:{value:string}) {
    this.actions.search(query.value);
  }

}
